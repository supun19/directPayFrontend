/**
 * Created by thilina on 12/16/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Url} from "url";


import {Merchant} from '../../class/merchant';

import {AppSettings} from '../../class/AppSetting'



@Injectable()
export class MerchantService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private merchantRegisterUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/register';
  private merchantListUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/list';
  private merchantDetailUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/merchant/details';
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
        .post(this.merchantDetailUrl, JSON.stringify(id), {headers: this.headers})
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

}
