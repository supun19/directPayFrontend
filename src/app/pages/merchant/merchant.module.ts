import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { MerchantRegisterComponent } from './register/merchantRegister.component';
import {MerchantComponent} from './merchant.component';
import {QrCodeComponent} from './QRCode/qrcode.component';

import { routing } from './merchant.routing';

import { QRCodeModule } from 'angular2-qrcode';
import {QRCodeComponent} from 'angular2-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    QRCodeModule,
    routing
  ],
  declarations: [
    MerchantRegisterComponent,MerchantComponent,QrCodeComponent


  ]
})
export class MerchantModule {}
