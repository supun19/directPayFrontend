import { Routes, RouterModule } from '@angular/router';

import { MerchantRegisterComponent } from './register/merchantRegister.component';
import {QrCodeComponent} from './QRCode/qrcode.component';
import {MerchantComponent} from "./merchant.component";

const routes: Routes = [
  {
    path: '',
    component: MerchantComponent,
    children: [
      { path: 'register', component: MerchantRegisterComponent },
      { path: 'qrcode', component: QrCodeComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
