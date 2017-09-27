import {Routes, RouterModule, DetachedRouteHandle} from '@angular/router';

import { MerchantRegisterComponent } from './register/merchantRegister.component';

import {MerchantComponent} from "./merchant.component";

import {DetailComponent} from './Detail/detail.component';
import {MerchantEditComponent} from './merchanrEdit/merchantEdit.component';
//merchant list

import {MerchantListComponent} from './merchantlist/merchantlist.component';
import {MerchantGuard} from "../security/merchant.guard";
const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      { path: 'register', component: MerchantRegisterComponent,canActivate: [MerchantGuard] },
      { path: 'list', component: MerchantListComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'edit', component: MerchantEditComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
