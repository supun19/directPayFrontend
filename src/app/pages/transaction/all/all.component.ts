import {Component, OnInit, Input} from '@angular/core';
import {TransactionService} from '../transaction.service'
import {Merchant} from "../../../class/merchant";
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { Logger } from "angular2-logger/core";

@Component({

  selector:'all',
  templateUrl:'./all.component.html',
  styleUrls: ['./all.component.css'],
  providers:[TransactionService]

})

export class AllComponent implements OnInit{


  private qrtext;
  private loading = false;
  data;
  filterdata;

  todate =  { year: 2016, month: 10, day: 9 } ;
  fromdate = { year: 2016, month: 10, day: 9 } ;

  day = false;
  daytoday =false;

  //error handling
  transctionError = false;
  transctionInfo = false;
  infomassage =""
  errormassage=""
  type="";


  //selectedDate = "2017-09-11";
  private selectedDateFrom: Object = { date: { year: 2016, month: 10, day: 9 } };
  private selectedDateTo: Object = { date: { year: 2017, month: 10, day: 9 } };


  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";

  customParam:string = "";
  hideByCustomParam:boolean;


  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
    markCurrentDay:true,
    todayBtnTxt:'Today',

  };



  constructor(private trasaction: TransactionService,private _logger: Logger) {
  }
  ngOnInit() {

    this.userblock();
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
    this.fromdate.year = currentdate.date.year;
    this.fromdate.month = currentdate.date.month;
    this.fromdate.day = currentdate.date.day;
    this.todate.year = currentdate.date.year;
    this.todate.month = currentdate.date.month;
    this.todate.day = currentdate.date.day;
    //this.todate = currentdate.date;
    console.log(this.fromdate);

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
  onDateChangedTo(event: IMyDateModel) {

    this.todate =  event.date;
    this.selectedDateTo = event;


  }
  onDateChangedFrom(event: IMyDateModel) {

    this.fromdate = event.date;
    this.selectedDateFrom = event;
    console.log(event.date);
    //console.log(this.fromdate);
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
  getTransaction(){
    this.customParam="";
    this.loading = true;

    this.transctionInfo=false;
    this.transctionError =false;
    this.filterdata = [];

    if(+this.type == 0){
      console.log(this.fromdate);
      this.nextDate();
      this.getByDateToDate();

    }
    if(+this.type == 1){
      this.getByDateToDate()
    }

  }
  getByDateToDate(){
    console.log("getByDateToDate");
    console.log(this.fromdate);
    console.log(this.todate);
    this.trasaction.getTransactionByDateToDate(this.fromdate,this.todate).then((data) => {

      if(data.data.length==0){
        this.infomassage = "Transaction not avilable";
        this.transctionInfo = true;
        this.loading = false;
      }
      else if(data.data != null){
        this.data = data.data;
        console.log("transaction list");
        console.log(this.data);
        this.filterdata = this.data;

      }
      else {
        if(data.errors != null){
          this.errormassage = data.errors[0].source.title;
          this.transctionError = true;
        }

      }
      this.loading = false;
    });

  }

  nextDate(){
    console.log(this.fromdate);
    console.log(this.todate);
    var date = new Date(this.fromdate.year,+this.fromdate.month-1,this.fromdate.day);
    date.setDate(date.getDate()+1);
    this.todate.year = date.getFullYear();
    this.todate.month = date.getMonth()+1;
    this.todate.day = date.getDate();
    console.log(this.fromdate);
    console.log(this.todate);

  }
  selectType(){
    this._logger.error('This is a priority level 1 error message...'+this.type);
    this._logger.debug('tyoe ',""+this.type)
  }

  userblock(){
      this.trasaction.userBlock().then((data) => {
        console.log(data);
      });

  }

  filterTransactionByCustomParam(){

    console.log(this.customParam);
  }
}
