import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';


import {QrCodeComponent} from './qrcode.component';
import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  imports: [CommonModule,QRCodeModule],
  declarations: [QrCodeComponent],
  exports: [QrCodeComponent]
})
export class QrModule {
}
