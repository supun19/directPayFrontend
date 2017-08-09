import {Component, OnInit, Input} from '@angular/core';

import {UserService} from '../user.service'
import {Merchant} from "../../../class/merchant";
@Component({

  selector:'merchantlist',
  templateUrl:'userList.component.html',
  styleUrls: ['userList.component.css'],
  providers:[UserService]

})

export class UserListComponent implements OnInit{
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

  public userDetailByNic;
  private merchant_exit_from_brNumber = false;
  constructor(private user: UserService){
    this.loading = false;
  }
  ngOnInit(){
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

  searchUser(nic){
    this.merchant_exit_from_brNumber = false;
    this.loading = true;
    console.log(nic);
    this.user.userDetailByBrNumber(nic).then((data) => {

      if(data.data != null){
        this.data = data.data;
        console.log(this.data);

        this.loading = false;

          this.userDetailByNic = data.data;


      }
      else {
        this.loading = false;
      }
    });
  }



}
