import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceReportPage } from './performance-report.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceReportPageRoutingModule {}
