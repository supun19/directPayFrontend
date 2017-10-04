import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AdminFeatureComponent} from "./adminFeature.component";
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class AdminFeatureService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private bankRegisterUrl = AppSettings.DIRECT_PAY_ENDPOINT + '/admin/adminFeature/bankDetail';


  constructor(private http: Http) {
  }


  bankRegister(bankdetail: any): Promise<any> {

    return new Promise((resolve, reject) => {
      return this.http
        .post(this.bankRegisterUrl, JSON.stringify(bankdetail), {headers: this.headers})
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
