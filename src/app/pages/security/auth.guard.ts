import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';

import {Observable} from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {





  canActivate(){
    // if(this.authService.isLoggedIn()){
    //    return true;
    // }
    // else{
    //   this.router.navigate(['/login']);
    //   return false;
    // }
    return false;

  }


}
