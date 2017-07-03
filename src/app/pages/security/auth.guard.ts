import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";
import {Permission} from "../../class/permission";

import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable()
export class AuthGuard implements CanActivate {



  constructor(private storage:LocalStorageService){

  }

  canActivate() {

    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean{

    // A call to the actual login service would go here
    // For now we'll just randomly return true or false

    let loggedIn:string =  this.storage.retrieve("loggedIn");


    if(loggedIn == "true"){
      return  true;
    }

    return false;
  }


}
