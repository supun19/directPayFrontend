import {Component, OnInit, Input} from '@angular/core';

import {MerchantService} from '../merchant.service'
import {Merchant} from "../../../class/merchant";
@Component({

  selector:'merchantlist',
  templateUrl:'./merchantlist.component.html',
  styleUrls: ['./merchantList.component.css'],
  providers:[MerchantService]

})

export class MerchantListComponent implements OnInit{
  public qrtext;
  public loading = true;
  data;
  filterdata;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  role = "merchant";

  merchantDetail;
  constructor(private merchant: MerchantService){

  }
  ngOnInit(){
    this.getMerchantList();
  }
  getMerchantList(){
    this.merchant.getMerchantList(this.role).then((data) => {

      if(data.data != null){
        this.data = data.data;
        console.log(this.data);
        if(data.data[0]!=null){
          this.filterdata = data.data[0].Resources;
          this.loading = false;
        }
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
  showQrcode(id){

    this.qrtext = id + " $ main nsb texi"
    this.merchantId=id;
    this.merchantqrcode = true;
    console.log(this.qrtext);


  }
  showMerchantDetail(id){
    console.log(id);
    this.merchant.merchantDetail(id).then((data) => {

      if(data.data != null){
        this.data = data.data;
        console.log(this.data);
        if(data.data[0]!=null){
          this.merchantDetail = data.data[0];

        }
      }
      else {

      }
    });


  }



}
