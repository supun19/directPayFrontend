import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';


import { Pages } from './pages.component';
import {AuthGuard} from "./security/auth.guard";
import {StorageService} from "./storage.service";
import {SettingGuard} from "./security/setting.guard";

import {Ng2Webstorage} from 'ngx-webstorage';

@NgModule({
  imports: [CommonModule, AppTranslationModule, NgaModule, routing,Ng2Webstorage],
  declarations: [Pages],
  providers:[
    AuthGuard,
    StorageService,
    SettingGuard

  ]

})
export class PagesModule {
}
