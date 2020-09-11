import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PossibleProjectsPage } from './possible-projects.page';

const routes: Routes = [
  {
    path: '',
    component: PossibleProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PossibleProjectsPageRoutingModule {}
