import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AgentService{
  getData() {

    return [
      {
        transactionId: "000001",
        merchantId: '1',
        merchantName:'kills',
        data: '24.05.2017',
        amount: '1000.00',
        status:"success"
      }, {
        transactionId: "000002",
        merchantId: '2',
        merchantName:'laugh',
        data: '24.03.2017',
        amount: '200.00',
        status:"succss"
      }, {
        transactionId: "000003",
        merchantId: '3',
        merchantName:'kzone',
        data: '04.02.2017',
        amount: '1100.00',
        status:"success"
      }
    ];


  }

}
