import { Routes, RouterModule } from '@angular/router';
import {TransactionComponent} from './transaction.component';

import {AllComponent} from './all/all.component'
const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
    children: [
      { path: 'all', component: AllComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
