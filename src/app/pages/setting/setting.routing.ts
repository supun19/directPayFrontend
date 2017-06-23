import { Routes, RouterModule } from '@angular/router';
import {SettingComponent} from './setting.component';

import {PermissionComponent} from './permission/permission.component'
import {SettingGuard} from "../security/setting.guard";
const routes: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      { path: 'permission', component: PermissionComponent,canActivate: [SettingGuard]  },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
