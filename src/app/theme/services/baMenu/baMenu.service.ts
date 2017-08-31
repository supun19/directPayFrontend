import {Injectable} from '@angular/core';
import {Router, Routes} from '@angular/router';
import * as _ from 'lodash';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Permission} from "../../../class/permission";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class BaMenuService {
  menuItems = new BehaviorSubject<any[]>([]);

  protected _currentMenuItem = {};

  constructor(private _router:Router,private storage:LocalStorageService) { }

  /**
   * Updates the routes in the menu
   *
   * @param {Routes} routes Type compatible with app.menu.ts
   */
  public updateMenuByRoutes(routes: Routes) {

    let convertedRoutes = this.convertRoutesToMenus(_.cloneDeep(routes));
    console.log(convertedRoutes);
    this.menuItems.next(convertedRoutes);
  }

  public convertRoutesToMenus(routes:Routes):any[] {
    let items = this._convertArrayToItems(routes);
    //console.log(items);
    return this._skipEmpty(items);
  }

  public getCurrentItem():any {
    return this._currentMenuItem;
  }

  public selectMenuItem(menuItems:any[]):any[] {
    let items = [];
    menuItems.forEach((item) => {
      this._selectItem(item);

      if (item.selected) {
        this._currentMenuItem = item;
      }

      if (item.children && item.children.length > 0) {
        item.children = this.selectMenuItem(item.children);
      }
      //console.log("manu");
      items.push(item);
    });
    return items;
  }

  protected _skipEmpty(items:any[]):any[] {
    let menu = [];
    items.forEach((item) => {
      let menuItem;
      if (item.skip) {
        if (item.children && item.children.length > 0) {
          menuItem = item.children;
        }
      } else {
        menuItem = item;
      }

      if (menuItem) {
        menu.push(menuItem);
      }
    });

    return [].concat.apply([], menu);
  }

  protected _convertArrayToItems(routes:any[], parent?:any):any[] {
    let items = [];
    routes.forEach((route) => {

      items.push(this._convertObjectToItem(route, parent));
    });
    return items;
  }

  protected _convertObjectToItem(object, parent?:any):any {
    let item:any = {};
    //console.log(object);
    //this.givePermission(object);
    if (object.data && object.data.menu) {
      // this is a menu object
      item = object.data.menu;



      //this.givePermission(item);
      item.route = object;
      delete item.route.data.menu;
    } else {
      item.route = object;
      item.skip = true;
    }

    // we have to collect all paths to correctly build the url then
    if (Array.isArray(item.route.path)) {
      item.route.paths = item.route.path;
    } else {
      item.route.paths = parent && parent.route && parent.route.paths ? parent.route.paths.slice(0) : ['/'];
      if (!!item.route.path) item.route.paths.push(item.route.path);
    }

    if (object.children && object.children.length > 0) {
      item.children = this._convertArrayToItems(object.children, item);
    }

    let prepared = this._prepareItem(item);

    // if current item is selected or expanded - then parent is expanded too
    if ((prepared.selected || prepared.expanded) && parent) {
      parent.expanded = true;
    }
    //console.log(prepared)
    this.givePermission(prepared);
    return prepared;
  }

  protected _prepareItem(object:any):any {
    if (!object.skip) {
      object.target = object.target || '';
      object.pathMatch = object.pathMatch  || 'full';
      return this._selectItem(object);
    }

    return object;
  }

  protected _selectItem(object:any):any {
    object.selected = this._router.isActive(this._router.createUrlTree(object.route.paths), object.pathMatch === 'full');
    return object;
  }
  protected givePermission(item){

    let permission = this.storage.retrieve('ownpermission');
    console.log(item);
    console.log(permission);
    if(item.title == "Merchant"){
      console.log(permission.merchantRegister);
      item.children[0].hidden = !permission.merchantRegister;
      item.hidden = !permission.merchant


    }
    if(item.title == "Setting"){
      console.log(permission.role);
      switch (permission.role){
        case "superadmin" :item.hidden = false;
          break;
        case "admin" :item.hidden = false;
          break;
        case "manager" :item.hidden = false;
          break;
        case "supervisor" :item.hidden = true;
          break;
        case "operator" :item.hidden = true;
          break;
        case "Customer support" :item.hidden = true;
          break;
        case "merchant" :item.hidden = true;
          break;
        case "user" :item.hidden = true;
          console.log("user");
          break;

      }
    }
    if(item.title == "general.menu.dashboard"){
      item.hidden = true
    }
    if(item.title == "User"){
      item.hidden = !permission.user
    }
    if(item.title == "Reports"){
      item.hidden = !permission.report
    }
    console.log(item);


  }
}
