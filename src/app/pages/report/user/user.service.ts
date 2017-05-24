import {Injectable} from '@angular/core'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class UserService{
  getData() {

    return [
      {
        transactionId: "000001",
        userId: '1',
        userName:'buddhika',
        data: '24.05.2017',
        amount: '1000.00',
        status:"success"
      }, {
        transactionId: "000002",
        userId: '2',
        userName:'atupola',
        data: '24.03.2017',
        amount: '200.00',
        status:"succss"
      }, {
        transactionId: "000003",
        userId: '3',
        userName:'asela',
        data: '04.02.2017',
        amount: '1100.00',
        status:"success"
      }
    ];


  }
  getUsersId(){
    return [
      {
        userId: '1',
        userName:'buddhika'
      }, {

        userId: '2',
        userName:'atupola'

      }, {

        userId: '3',
        userName:'asela'
      }
    ];

  }

}
