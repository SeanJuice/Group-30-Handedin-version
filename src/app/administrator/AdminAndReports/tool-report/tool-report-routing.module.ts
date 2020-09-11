import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolReportPage } from './tool-report.page';

const routes: Routes = [
  {
    path: '',
    component: ToolReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolReportPageRoutingModule {}
