import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {AuthGuard} from "./security/auth.guard";
import {SettingGuard} from "./security/setting.guard";
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [
      //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      //{ path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      //{ path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      //{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      //{ path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      //{ path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      //{ path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      //{ path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'merchant', loadChildren: './merchant/merchant.module#MerchantModule', },
      { path: 'user', loadChildren: './user/user.module#UserModule', },
      { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionModule' },
      { path: 'report', loadChildren: './report/report.module#ReportModule' },
      { path: 'setting', loadChildren: './setting/setting.module#SettingModule',canActivate: [SettingGuard] }

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
