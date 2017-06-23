import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";


@Injectable()
export class MerchantGuard implements CanActivate {

  ownpermission;



  canActivate() {
    return this.canMerchantRegister();
  }


  private canMerchantRegister(){

    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    return  this.ownpermission[0].merchantRegister;
  }


}
