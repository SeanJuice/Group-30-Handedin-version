import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalStudentsPage } from './external-students.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalStudentsPageRoutingModule {}
