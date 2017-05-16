import {Injectable} from '@angular/core';

@Injectable()
export class TransactionService {

  dataTableData = [{
    "id": "12345",
    "status": "success",
    "dateTime": "2015-05-22T14:56:29.000Z",
    "amount": "10000",
    "merchantId": "12345"
  },
    {
      "id": "12345",
      "status": "success",
      "dateTime": "2015-05-22T14:56:29.000Z",
      "amount": "10000",
      "merchantId": "12345"
    }
];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataTableData);
      }, 2000);
    });
  }
}
