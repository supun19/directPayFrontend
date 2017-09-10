import {Component, OnInit, Input} from '@angular/core';
import  {Merchant} from '../../../class/merchant';

import {MqttConnection} from '../../../class/MqttConnection';

@Component({

  selector:'detail',
  templateUrl:'./detail.component.html',


})

export class DetailComponent implements OnInit{

  mqttConnection:MqttConnection;
  ngOnInit(): void {
    this.mqttConnection  = new MqttConnection("12345678");
    this.mqttConnection.onMessage(function (msg:string) {

      console.log("calback msg",msg);
    });
  }

  constructor(){

  }

  getLastTransaction(){


  }






}
