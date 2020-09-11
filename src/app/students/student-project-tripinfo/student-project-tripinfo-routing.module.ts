import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProjectTripinfoPage } from './student-project-tripinfo.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProjectTripinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProjectTripinfoPageRoutingModule {}
