import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";


@Injectable()
export class SettingGuard implements CanActivate {

  ownpermission;



  canActivate() {
    return this.canSetting();
  }


  private canSetting(){

    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    let role = this.ownpermission[0].role;
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
