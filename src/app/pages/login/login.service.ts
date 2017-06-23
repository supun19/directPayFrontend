import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class LoginService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/login';
    //private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions';
    //private merchantListUrl = 'http://192.168.8.100/merchant/list';
    data;

    constructor(private http: Http) { }


    login(payload:any): Promise<any> {
        return new Promise((resolve, reject) => {
             this.http
                .post(this.urlTransactionList,payload, {headers: this.headers})
                .toPromise()
                .then(response => {
                    //noinspection TypeScriptUnresolvedFunction
                      this.data = resolve(response.json());
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
