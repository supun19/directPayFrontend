import { Routes, RouterModule } from '@angular/router';

import { MerchantRegisterComponent } from './register/merchantRegister.component';

import {MerchantComponent} from "./merchant.component";

//merchant list

import {MerchantListComponent} from './merchantlist/merchantlist.component';
const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      { path: 'register', component: MerchantRegisterComponent },
      { path: 'list', component: MerchantListComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
