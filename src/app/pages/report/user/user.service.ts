import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../../../app/class/AppSetting'
@Injectable()

export class UserService{
  private headers = new Headers({'Content-Type': 'application/json'});
  private urlTransactionList = 'http://192.168.8.100:8000/reports/transactions';
  //private headers = new Headers({'Content-Type': 'application/json'});
  //private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions';
  private urlTransactionListAgentByDate = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions/agent/bydate';
  private urlTransactionListAgentByDateToDate = AppSettings.DIRECT_PAY_ENDPOINT+'/transactions/agent/between';
  private urlAgentList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/filterUsers';
  //private merchantListUrl = 'http://192.168.8.100/merchant/list';
  constructor(private http: Http) { }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .get(this.urlTransactionList, {headers: this.headers})
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
  getUsers(role): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlAgentList, JSON.stringify({role:role}),{headers: this.headers})
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

  getUsersTransactionByDateToDate(userId,fromdate,todate) : Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlTransactionListAgentByDateToDate, JSON.stringify({
          userId: userId,
          fromDate: fromdate,
          toDate: todate
        }), {headers: this.headers})
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
