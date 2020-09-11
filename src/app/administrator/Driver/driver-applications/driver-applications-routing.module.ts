import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverApplicationsPage } from './driver-applications.page';

const routes: Routes = [
  {
    path: '',
    component: DriverApplicationsPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverApplicationsPageRoutingModule {}
