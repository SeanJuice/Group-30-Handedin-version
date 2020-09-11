import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPApplicationPage } from './cp-application.page';

const routes: Routes = [
  {
    path: '',
    component: CPApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPApplicationPageRoutingModule {}
