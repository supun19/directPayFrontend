import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AgentService{

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
  /*getData() {

    return [
      {
        transactionId: "000001",
        merchantId: '1',
        merchantName:'kills',
        data: '2017.05.06',
        amount: '1000.00',
        status:"Success"
      }, {
        transactionId: "000002",
        merchantId: '2',
        merchantName:'laugh',
        data: '2017.01.18',
        amount: '200.00',
        status:"Succss"
      }, {
        transactionId: "000003",
        merchantId: '3',
        merchantName:'kzone',
        data: '2017.08.01',
        amount: '1100.00',
        status:"Success"
      }
    ];


  }*/

}
