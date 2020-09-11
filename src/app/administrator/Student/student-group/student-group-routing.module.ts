import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentGroupPage } from './student-group.page';

const routes: Routes = [
  {
    path: '',
    component: StudentGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentGroupPageRoutingModule {}
