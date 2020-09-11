import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentGroupAccountsPage } from './student-group-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: StudentGroupAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentGroupAccountsPageRoutingModule {}
