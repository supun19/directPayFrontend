import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';

import {PermissionComponent} from './permission/permission.component'
const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      { path: 'permission', component: PermissionComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
