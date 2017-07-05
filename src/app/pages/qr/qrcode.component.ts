import {Component, OnInit, Input} from '@angular/core';


@Component({

  selector:'qrcode',
  templateUrl:'./qrcode.component.html',


})

export class QrCodeComponent{
  @Input() qrtext :any;
  constructor(){

  }






}
