import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationReportPage } from './presentation-report.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationReportPageRoutingModule {}
