import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {AppSettings} from '../../class/AppSetting'
@Injectable()
export class TransactionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/transactions/agent/between';
  private urlUSerBlock = AppSettings.DIRECT_PAY_ENDPOINT+'/admin/user/disable';
  private urlGetTransactionById = AppSettings.DIRECT_PAY_ENDPOINT+'/transaction/id';
  private lastTransaction = AppSettings.DIRECT_PAY_ENDPOINT+'/transaction/last';
  private lastTransactions = AppSettings.DIRECT_PAY_ENDPOINT+'/transactions/last';
  //private urlTransactionList = AppSettings.DIRECT_PAY_ENDPOINT+'/reports/transactions';
  //private merchantListUrl = 'http://192.168.8.100/merchant/list';
  constructor(private http: Http) { }
  getTransactionByDateToDate(param): Promise<any> {
    console.log(param);
    console.log("data between")
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlTransactionList,JSON.stringify(param), {headers: this.headers})
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

  userBlock(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlUSerBlock,JSON.stringify({
          id: '90d9be5d-79b2-4a4f-9432-a87722095198',

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
  getTransactionById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.http
        .post(this.urlGetTransactionById,JSON.stringify({
          transactionId: id

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

  getLastTransaction():Promise<any>{

    return new Promise((resolve,reject)=>{
        return this.http
          .post(this.lastTransaction,{headers:this.headers})
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
  getLastTransactions():Promise<any>{

    return new Promise((resolve,reject)=>{
        return this.http
          .post(this.lastTransactions,{headers:this.headers})
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
