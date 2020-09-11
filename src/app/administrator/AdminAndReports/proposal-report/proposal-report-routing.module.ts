import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalReportPage } from './proposal-report.page';

const routes: Routes = [
  {
    path: '',
    component: ProposalReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalReportPageRoutingModule {}
