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
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private userDetailByNicUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/user/detail/nic';
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

}
