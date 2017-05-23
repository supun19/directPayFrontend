import {Component, OnInit, Input} from '@angular/core';

import {MerchantService} from '../../../services/merchant.service'
import {Merchant} from "../../../class/merchant";
@Component({

  selector:'agent',
  templateUrl:'./agent.component.html',
  providers:[MerchantService]

})

export class AgentComponent{

  data;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  constructor(private merchant: MerchantService) {
    this.merchant.getData().then((data) => {

      if(data.data != null){
        this.data = data.data;
        console.log(this.data);
      }
      else {

      }
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }
  showQrcode(merchant:Merchant){


    this.merchantId=merchant.merchantId;
    this.merchantqrcode = true;
  }




}
