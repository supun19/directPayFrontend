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
import {DetailComponent} from './Detail/detail.component';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { DataFilterPipe } from './merchantlist/data-filter.pipe';


import {MerchantListComponent} from './merchantlist/merchantlist.component';

import { routing } from './merchant.routing';

import { QRCodeModule } from 'angular2-qrcode';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    QRCodeModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    routing
  ],
  declarations: [
    MerchantRegisterComponent,MerchantComponent,QrCodeComponent,DetailComponent,
    MerchantListComponent,
    DataFilterPipe


  ]
})
export class MerchantModule {}
