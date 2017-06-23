import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class SettingService {

  private permissionChangeUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/permission/change';
  private getPermissionsUrl = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/permission/all';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  changePermission(permission): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.permissionChangeUrl,permission, {headers: this.headers})
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
  getPermission(role): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.getPermissionsUrl,JSON.stringify({"role":role}), {headers: this.headers})
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
