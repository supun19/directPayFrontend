import {Component, OnInit, Input} from '@angular/core';

import {AgentService} from './agent.service'
import {Merchant} from "../../../class/merchant";

import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Logger } from "angular2-logger/core";
@Component({


  selector:'agent',
  templateUrl:'./agent.component.html',
  providers:[AgentService]

})

export class AgentComponent {

  data;
  filterdata;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  merchantqrcode = false;
  merchantId="";
  type="";
  todate;
  fromdate;
  role ="merchant";
  filtering ={"fromdate":this.fromdate,"todate":this.todate}
  agents;
  agentId;

  day = false;
  daytoday =false;
  private myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  // Initialized to specific date (09.10.2018).
  //private model: Object = { date: { year: 2018, month: 10, day: 9 } };


  constructor(private agentService: AgentService,private _logger: Logger) {

    /*this.agentService.getData().then((data) => {
      if(data.data != null){
        this.data = data.data;
        this.filterdata = this.data;
        console.log(this.data);

      }
      else {
        console.log(data.data);
      }
    });*/
    //this.data = this.agentService.getData();
    //this.filterdata = this.data;

    this.agentService.getAgents(this.role).then(
      (data) =>{

        if(data.data != null){
          _logger.debug("AgentComponent:agent List response",data);
          console.log(data.data);
          this.agents = data.data[0].Resources;

          console.log(this.agents);

        }
        else {

        }

      }
    );
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
    //this.todate = event.date.year+"."+event.date.month+"."+event.date.day
    //this._logger.error(this.todate);
    //this.filtering.todate =this.todate;

  }
  onDateChangedFrom(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    //this.fromdate = event.date;
    this.fromdate = event.date;
    //this.fromdate = event.date.year+"."+event.date.month+"."+event.date.day
    //this._logger.error(this.fromdate);
    //this.filtering.fromdate =this.fromdate;



  }
  selectType(){
    this._logger.error('This is a priority level 1 error message...'+this.type);
    this._logger.debug('tyoe ',""+this.type)
  }
  /*conditon(){

    this._logger.error(''+this.fromdate);
    this._logger.error(''+this.todate);
   // val = transaction.data.split(".");
    var hide = false;
    var from=[];
    from = this.fromdate.split(".");
    var to=[];
    to = this.todate.split(".");
    //this._logger.error(this.data);

    var current=[]
    for(let item of this.data){

      this._logger.error(item);
      hide = false;
      var val =[];
      val = item.dateTime.date.split(" ");
      val = val[0].split("-");

      var fd:number = +from[2]
      var fm:number = +from[1]
      var fy:number = +from[0]

      var td:number = +to[2]
      var tm:number = +to[1]
      var ty:number = +to[0]

      var vd:number = +val[2]
      var vm:number = +val[1]
      var vy:number = +val[0]

      if(fy<= vy){
        if(fy==vy){
          if(fm<=vm){
            if(fm == vm){
              if(fd <= vd){

              }
              else {

                hide = true;
              }

            }

          }
          else {
            hide = true;
          }
        }
      }
      else {
        hide = true;
      }
      if( vy <= ty){
        if(vy==ty){
          if(vm<=tm){
            if(vm == tm){
              if(vd <= td){

              }
              else {

                hide = true;
              }

            }

          }
          else {
            hide = true;
          }
        }
      }
      else {
        hide = true;
      }

      /*this._logger.error(''+fy+":::"+ty+":::"+vy);
      if( fy<= vy && vy <= ty ){
        this._logger.error(''+fm+":::"+tm+":::"+vm);
        if(fy== vy || vy == ty) {
          if (fm <= vm && vm <= tm) {
            this._logger.error('' + fd + ":::" + td + ":::" + vd);
            if (fm == vm || vm == tm) {
              if (fd <= vd && vd <= td) {

                //this._logger.error('trueeee');
              }
              else {

                hide = true;
              }
            }
          }


          else {

            hide = true;
          }
        }
      }
      else{

        hide= true;
      }
*/
/*
      if(!hide){
        current.push(item);
      }
    }
    /*

    var hide = false;


*/
   /* this.filterdata = current;
    console.log("agentId"+this.agentId);
  }*/
  getAgentTransaction(){
    if(+this.type == 0){
      console.log("day");
      console.log("fromdate:"+this.fromdate);
      console.log("agentId"+this.agentId);

      this.getByDate()

    }
    if(+this.type == 1){
      console.log("daytoday");
      console.log("fromdate:"+this.fromdate+"--todate"+this.todate);
      console.log("agentId"+this.agentId);
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
  getByDate(){

    this.agentService.getAgentTransactionByDate(this.agentId,this.fromdate);
  }
  getByDateToDate(){

    this.filterdata=this.agentService.getAgentTransactionByDateToDate(this.agentId,this.fromdate,this.todate);
  }


}
