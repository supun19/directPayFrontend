import {Component, OnInit, Input} from '@angular/core';


@Component({

  selector:'qrcode',
  templateUrl:'./qrcode.component.html',


})

export class QrCodeComponent{
  @Input() merchantId :any;
  constructor(){

  }






}
