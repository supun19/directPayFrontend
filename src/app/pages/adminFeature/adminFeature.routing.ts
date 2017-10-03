import { Routes, RouterModule } from '@angular/router';
import {AdminFeatureComponent} from './adminFeature.component';
import {BankDetailComponent} from "./bankDetail/bankDetail.component";
const routes: Routes = [
  {
    path: '',
    component: AdminFeatureComponent,
    children: [
      { path: 'bankDetail', component: BankDetailComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
