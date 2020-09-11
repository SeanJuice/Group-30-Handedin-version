import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentProjectinfoPage } from './student-projectinfo.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProjectinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentProjectinfoPageRoutingModule {}
