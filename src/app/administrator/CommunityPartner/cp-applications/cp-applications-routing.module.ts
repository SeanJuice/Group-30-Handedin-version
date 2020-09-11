import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpApplicationsPage } from './cp-applications.page';

const routes: Routes = [
  {
    path: '',
    component: CpApplicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpApplicationsPageRoutingModule {}
