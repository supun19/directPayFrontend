import {Component, OnInit, Input} from '@angular/core';
import {TransactionService} from '../transaction.service'
import {Merchant} from "../../../class/merchant";
@Component({

  selector:'all',
  templateUrl:'./all.component.html',
  providers:[TransactionService]

})

export class AllComponent{

  data;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  constructor(private trasaction: TransactionService) {
    this.trasaction.getData().then((data) => {
      if(data.data != null){
        this.data = data.data;
        console.log(this.data);

      }
      else {
        console.log(data.data);
      }
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }
  showQrcode(id:any){


    this.merchantId=id;
    this.merchantqrcode = true;
  }

}
