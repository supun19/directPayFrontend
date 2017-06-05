import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { DataFilterPipe } from './all/data-filter.pipe';


import {TransactionComponent} from './transaction.component';
import {AllComponent} from './all/all.component'

import { QRCodeModule } from 'angular2-qrcode';

import { routing } from './transaction.routing';

import {QrModule} from '../qr/qr.module'

import { MyDatePickerModule } from 'mydatepicker';

import { Logger } from "angular2-logger/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    DataTableModule,
    HttpModule,
    HotTableModule,
    routing,
    QRCodeModule,
    QrModule,
    MyDatePickerModule,
  ],
  declarations: [
    TransactionComponent,
    AllComponent,
    DataFilterPipe,


  ],
  providers:    [ Logger ]
})
export class TransactionModule {}
