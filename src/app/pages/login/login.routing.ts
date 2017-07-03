import { Routes, RouterModule }  from '@angular/router';

import { LoginComponent } from './login.component';
import { ModuleWithProviders } from '@angular/core';
import {PagerComponent} from "ng2-smart-table/components/pager/pager.component";
import {Pages} from "../pages.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
