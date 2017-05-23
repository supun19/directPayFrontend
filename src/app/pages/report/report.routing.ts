import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from './report.component';

import {AgentComponent} from './agent/agent.component'
const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      { path: 'agent', component: AgentComponent },

    ]
  }
];

export const routing = RouterModule.forChild(routes);
