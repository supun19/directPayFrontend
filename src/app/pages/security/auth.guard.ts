import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {





  canActivate() {
    return this.checkIfLoggedIn();
  }

  private checkIfLoggedIn(): boolean{

    // A call to the actual login service would go here
    // For now we'll just randomly return true or false

    let loggedIn:string =  localStorage.getItem("loggedIn");


    if(loggedIn == "true"){
      console.log("LoginGuard: The user is not logged in and can't navigate product details");
      return  true;
    }

    return false;
  }


}
