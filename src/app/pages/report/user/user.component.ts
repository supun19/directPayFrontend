import {Component, OnInit, Input} from '@angular/core';

import {UserService} from './user.service'
import {Merchant} from "../../../class/merchant";

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
@Component({


  selector:'user',
  templateUrl:'./user.component.html',
  providers:[UserService]

})

export class UserComponent implements OnInit {

  data;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  users;

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  // Initialized to specific date (09.10.2018).
  //private model: Object = { date: { year: 2018, month: 10, day: 9 } };


  constructor(private userService: UserService) {

  }
  ngOnInit(){
    this.data = this.userService.getData();
    this.users = this.userService.getUsersId();

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
  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }



}
