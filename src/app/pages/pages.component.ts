import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right" translate>{{'general.created_with'}} <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com" translate>{{'general.akveo'}}</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {

  ownpermission;
  register;
  constructor(private _menuService: BaMenuService,) {
  }

  ngOnInit() {
    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    console.log(this.ownpermission);
    this._menuService.updateMenuByRoutes(<Routes>PAGES_MENU);
  }

  visibilityForRole(role) {

    switch (role) {
      case "superAdmin" :

        this.register = true;
        break;

      case "admin" :
        this.register = true;
        break;

      case "manager" :
        this.register = true;
        break;

      case "supervisor" :
        this.register = false;
        break;

      case "operator" :
        this.register = false;
        break;

      case "customerSupport" :
        this.register = false;
        break;

    }
  }
}
