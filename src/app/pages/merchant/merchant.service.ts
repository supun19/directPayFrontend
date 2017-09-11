/**
 * Created by thilina on 12/16/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {Url} from "url";


import {Merchant} from '../../class/merchant';

import {AppSettings} from '../../class/AppSetting'



@Injectable()
export class MerchantService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private merchantRegisterUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/register';
  private merchantListUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/filterUsers';
  private merchantDetailUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/details';
  private merchantDetailByBrNumberUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/details/brnumber';
  private merchantLastTransaction = AppSettings.DIRECT_PAY_ENDPOINT+'/transaction/last';
  private merchantLastTransactions = AppSettings.DIRECT_PAY_ENDPOINT+'/transactions/last';
  constructor(private http: Http) { }



  login(user: any):  Promise<any> {
    return new Promise((resolve, reject) => {
      //noinspection TypeScriptUnresolvedFunction
      this.http
        .post(this.merchantRegisterUrl, JSON.stringify({user: user}), {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json())
          resolve(response.json());
        },error => {
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    })
  }

  register(merchant:Merchant): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.merchantRegisterUrl, JSON.stringify(merchant), {headers: this.headers})
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

  merchantDetail(id:any): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.merchantDetailUrl, JSON.stringify({id:id}), {headers: this.headers})
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
  getMerchantList(role): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.merchantListUrl, JSON.stringify({role:role}),{headers: this.headers})
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

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .get(this.merchantListUrl, {headers: this.headers})
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
  merchantDetailByBrNumber(data:any): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.merchantDetailByBrNumberUrl, data, {headers: this.headers})
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




}
