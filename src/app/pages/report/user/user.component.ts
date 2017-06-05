import {Component, OnInit, Input} from '@angular/core';

import {UserService} from './user.service'
import {Merchant} from "../../../class/merchant";

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Logger } from "angular2-logger/core";
@Component({


  selector:'user',
  templateUrl:'./user.component.html',
  providers:[UserService]

})

export class UserComponent implements OnInit {

  data;
  filterQuery = "";
  rowsOnPage = 10;
  merchantqrcode = false;
  merchantId="";
  users;
  userId;
  filterdata;

  day;
  daytoday;

  type="";
  //error handling
  transctionError = false;
  transctionInfo = false;
  infomassage =""
  errormassage=""


  role ="user";
  todate;
  fromdate;

  //selectedDate = "2017-09-11";
  private selectedDateFrom: Object = { date: { year: 2016, month: 10, day: 9 } };
  private selectedDateTo: Object = { date: { year: 2017, month: 10, day: 9 } };

  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    markCurrentDay:true,
    todayBtnTxt:'Today',
  };
  // Initialized to specific date (09.10.2018).
  //private model: Object = { date: { year: 2018, month: 10, day: 9 } };


  constructor(private userService: UserService,private _logger: Logger) {

  }
  ngOnInit(){

    this.initiateDate();
   // this.data = this.userService.getData();
    /*this.users = this.userService.getUsersId();
    this.userService.getData().then((data) => {
      if(data.data != null){
        this.data = data.data;
        this.filterdata = this.data;
        //console.log(this.data);

      }
      else {
        console.log(data.data);
      }
    });*/
    this.userService.getUsers(this.role).then(
      (data) =>{

        if(data.data != null){
          this._logger.debug("AgentComponent:agent List response",data);
          console.log(data.data);
          if(data.data[0]!=null){
            this.users = data.data[0].Resources;
            console.log(this.users);
          }


        }
        else {
          this._logger.debug("error","network network error");
        }

      }
    );

  }
  initiateDate(){
    let date  = new Date();
    var currentdate ={
      date:{
        year : date.getFullYear(),
        month :date.getMonth()+1,
        day : date.getDate()

      }

    }
    this.selectedDateFrom = currentdate;
    this.selectedDateTo = currentdate;
    this.fromdate = currentdate.date;
    this.todate = currentdate.date;

  }
  selectType(){
    this._logger.error('This is a priority level 1 error message...'+this.type);
    this._logger.debug('tyoe ',""+this.type)
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
  onDateChangedTo(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc

    this.todate =  event.date;
    this.selectedDateTo = event;

  }
  onDateChangedFrom(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.fromdate = event.date;
    this.selectedDateFrom = event;
    console.log(event.date);



  }

  getAgentTransaction(){

    this.transctionInfo=false;
    this.transctionError =false;
    this.filterdata = [];

    if(+this.type == 0){
      console.log("day");
      console.log("fromdate:"+this.fromdate);
      console.log("agentId"+this.userId);
      this.nextDate();
      this.getByDateToDate()

    }
    if(+this.type == 1){
      console.log("daytoday");
      console.log("fromdate:"+this.fromdate+"--todate"+this.todate);
      console.log("agentId"+this.userId);
      this.getByDateToDate()
    }

  }
  filterDate(){


    if(+this.type == 0){

      console.log("Day")
      this.day = true;
      this.daytoday =false;

    }
    if(+this.type == 1){
      console.log("DayToDay")
      this.day = true;
      this.daytoday =true;
    }

  }
  getByDateToDate(){
    console.log("getByDAteToDate");
    this.userService.getUsersTransactionByDateToDate(this.userId,this.fromdate,this.todate).then((data) => {

      if(data.data.length==0){
        this.infomassage = "Transaction not avilable";
        this.transctionInfo = true;
      }
      else if(data.data != null){
        this.data = data.data;
        this.filterdata = this.data;
        console.log(this.data);

      }
      else {
        if(data.errors != null){
          this.errormassage = data.errors[0].source.title;
          this.transctionError = true;
        }

      }
    });
    console.log(this.filterdata);


  }

  nextDate(){
    console.log(this.fromdate);
    var date = new Date(this.fromdate.year,+this.fromdate.month-1,this.fromdate.day);
    date.setDate(date.getDate()+1);
    this.todate.year = date.getFullYear();
    this.todate.month = date.getMonth()+1;
    this.todate.day = date.getDate();
    //console.log(date);
    //console.log(this.todate);

  }


}
