import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from './report.component';

import {AgentComponent} from './agent/agent.component'
import {UserComponent} from './user/user.component';
const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      { path: 'agent', component: AgentComponent },
      { path: 'user', component: UserComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
