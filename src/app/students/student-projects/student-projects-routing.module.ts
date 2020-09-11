import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProjectsPage } from './student-projects.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProjectsPageRoutingModule {}
