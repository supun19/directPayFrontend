import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Injectable()
export class SettingGuard implements CanActivate {

  ownpermission;
  constructor(private storage:LocalStorageService){

  }

  canActivate() {
    return this.canSetting();
  }


  private canSetting(){

    this.ownpermission =  this.storage.retrieve("ownpermission");
    let role = this.ownpermission.role;
    if(role=="admin" ){
       return true;
    }
    else if(role =="superAdmin" ){
      return true;
    }
    else if(role=="manager" ){
      return true;
    }
    return  false;
  }


}
