import {Component, OnInit, Input} from '@angular/core';
import  {Merchant} from '../../../class/merchant';

import {MqttConnection} from '../../../class/MqttConnection';
import {UserService} from "../user.service";
import {LocalStorageService} from "ngx-webstorage";
import {forEach} from "@angular/router/src/utils/collection";

@Component({

  selector:'detail',
  templateUrl:'detail.component.html',
  providers:[UserService]


})

export class DetailComponent implements OnInit{

  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";
  mqttConnection:MqttConnection;
  id:string;
  filterData:any[];
  user:any;
  qr_code:string;
  ngOnInit(): void {
    this.getLastTransactions();
    this.id =  this.storage.retrieve('id');
    console.log("debug->userId : "+this.id);
    this.mqttConnection  = new MqttConnection("12345678");
    this.mqttConnection.onMessage(function (msg:string) {

      this.getLastTransaction();

    }.bind(this));

  }

  constructor(private userService:UserService,private storage:LocalStorageService){
    this.id =  this.storage.retrieve('id');
    console.log("debug->userId : "+this.id);
    this.user = this.storage.retrieve('user');
    console.log("user data : ",this.user);
    this.qr_code = this.id+" $ main Galle gye1"



  }

  getLastTransaction(){
    console.log("debug->userId : "+this.id);
    this.userService.getLastTransaction(this.id).then(data => {
      console.log(this.filterData.length);
      if(this.filterData[0].id != data.data[0].id){
        console.log("update last transaction");
        this.filterData.push(data.data[0]);
        let temp = data.data;
        this.filterData.forEach(element => {
          temp.push(element);
        });
        this.filterData = temp;
        console.log(this.filterData);
        console.log(data.data[0].id)
        console.log(this.filterData[9].id);
        console.log(this.filterData[0].id)
      }

    },
      error=>{

      }
    );
  }
  getLastTransactions(){
    console.log("debug->userId : "+this.id);
    this.userService.getLastTransactions(this.id).then(data => {
        this.filterData = data.data;
        console.log(data.data[0].id);
      },
      error=>{

      }
    );
  }







}
