import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgaModule } from '../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { HotTable, HotTableModule } from 'ng2-handsontable';

import {AgentComponent} from './agent/agent.component';
import {ReportComponent} from './report.component';

import { QRCodeModule } from 'angular2-qrcode';

import { routing } from './report.routing';

import {QrModule} from '../qr/qr.module'

import { DataFilterPipe } from './agent/data-filter.pipe';

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

  ],
  declarations: [
    AgentComponent,
    ReportComponent,
    DataFilterPipe,

  ]
})
export class ReportModule {}
