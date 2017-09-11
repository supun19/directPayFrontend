import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';

import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


import {UserComponent} from './user.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';
import { DataFilterPipe } from './userList/data-filter.pipe';


import {UserListComponent} from './userList/userlist.component';


import { QRCodeModule } from 'angular2-qrcode';

import { routing } from './user.routing';

import {QrModule} from '../qr/qr.module';
import {MerchantGuard} from "../security/merchant.guard";
import {DetailComponent} from './useDetail/detail.component';


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
    routing,
    QrModule
  ],
  declarations: [
    UserComponent,UserListComponent,
    DataFilterPipe,DetailComponent



  ]

})
export class UserModule {}
