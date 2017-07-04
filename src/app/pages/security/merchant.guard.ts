import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';



@Injectable()
export class MerchantGuard implements CanActivate {

  ownpermission;

  constructor(private storage:LocalStorageService){

  }

  canActivate() {
    return this.canMerchantRegister();
  }


  private canMerchantRegister(){

    this.ownpermission = this.storage.retrieve("ownpermission");
    //console.log("merchantguard");
    //console.log(this.ownpermission[0].merchantRegister);
    return  this.ownpermission.merchantRegister;
  }


}
