import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentDocumentsPage } from './student-documents.page';

const routes: Routes = [
  {
    path: '',
    component: StudentDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentDocumentsPageRoutingModule {}
