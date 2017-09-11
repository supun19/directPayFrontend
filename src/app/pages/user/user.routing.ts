import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import {DetailComponent} from './useDetail/detail.component'

//merchant list

import {UserListComponent} from './userList/userlist.component';
import {MerchantGuard} from "../security/merchant.guard";
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'list', component: UserListComponent },
      { path: 'detail', component: DetailComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
