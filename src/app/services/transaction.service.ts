import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TransactionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private urlTransactionList = 'http://192.168.8.100:8000/reports/transactions';
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
}
