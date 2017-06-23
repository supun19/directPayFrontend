import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { DataFilterPipe } from './permission/data-filter.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import {SettingComponent} from './setting.component';
import {PermissionComponent} from './permission/permission.component'

import { QRCodeModule } from 'angular2-qrcode';

import { routing } from './setting.routing';

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


    AngularFormsModule,
    AppTranslationModule,

    NgbRatingModule,

  ],
  declarations: [
    PermissionComponent,
    SettingComponent,
    DataFilterPipe,


  ],
  providers:    [ Logger ]
})
export class SettingModule {}
