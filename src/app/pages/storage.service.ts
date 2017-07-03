import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Permission} from "../class/permission";

@Injectable()
export class StorageService {

  merchantRegister = true;
  constructor(){}

  permissionStore(permission :any){
    localStorage.setItem('role',permission.role);
    localStorage.setItem('userEdit',permission.userEdit);
    localStorage.setItem('userEditApprove',permission.userEditApprove);
    localStorage.setItem('merchantEdit',permission.merchantEdit);
    localStorage.setItem('merchantEditApprove',permission.merchantEditApprove);
    localStorage.setItem('userRegister',permission.userRegister);
    localStorage.setItem('userRegisterApprove',permission.userRegisterApprove);
    localStorage.setItem('merchantRegister',permission.merchantRegister);
    localStorage.setItem('merchantRegisterApprove',permission.merchantRegisterApprove);
  }
   getMerchantRegisterPermission(){

    return Permission.merchantRegister;
   }

}
