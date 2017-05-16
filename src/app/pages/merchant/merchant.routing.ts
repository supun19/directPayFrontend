import { Routes, RouterModule } from '@angular/router';

import { MerchantRegisterComponent } from './register/merchantRegister.component';
import {QrCodeComponent} from './QRCode/qrcode.component';
import {MerchantComponent} from "./merchant.component";
import {DetailComponent} from "./Detail/detail.component";

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      { path: 'register', component: MerchantRegisterComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
