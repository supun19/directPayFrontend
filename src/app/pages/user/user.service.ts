/**
 * Created by thilina on 12/16/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Url} from "url";


import {User} from '../../class/User';

import {AppSettings} from '../../class/AppSetting'



@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private userDetailByNicUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/user/detail/nic';
  private merchantLastTransactions = AppSettings.DIRECT_PAY_ENDPOINT+'/transactions/last';
  private merchantLastTransaction = AppSettings.DIRECT_PAY_ENDPOINT+'/transaction/last';
  private userRegisterUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/user/register';
  private userUpdate = AppSettings.DIRECT_PAY_ENDPOINT+'/user/update';
  constructor(private http: Http) { }

  userDetailByBrNumber(nic:any): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.userDetailByNicUrl, JSON.stringify({nic:nic}), {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json());


          resolve(response.json());
        }, error => {
          console.log(error);
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

    });
  }

  getLastTransaction(id:any):Promise<any>{

    return new Promise((resolve,reject)=>{
        return this.http
          .post(this.merchantLastTransaction,JSON.stringify({id:id}),{headers:this.headers})
          .toPromise()
          .then(
            response=>{
              console.log(response.json())
              resolve(response.json());
            },
            error=>{
              console.log(error);
              reject(error);
            }
          )
          .catch((err)=>{
            console.log(err);
            reject(err);
          });

      }

    );
  }
  getLastTransactions(id:any):Promise<any>{

    return new Promise((resolve,reject)=>{
        return this.http
          .post(this.merchantLastTransactions,JSON.stringify({id:id}),{headers:this.headers})
          .toPromise()
          .then(
            response=>{
              console.log(response.json())
              resolve(response.json());
            },
            error=>{
              console.log(error);
              reject(error);
            }
          )
          .catch((err)=>{
            console.log(err);
            reject(err);
          });

      }

    );
  }

  register(user:User): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.userRegisterUrl, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json());


          resolve(response.json());
        }, error => {
          console.log(error);
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

    });
  }

  edit(user:User): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.userUpdate, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json());


          resolve(response.json());
        }, error => {
          console.log(error);
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

    });
  }
}
