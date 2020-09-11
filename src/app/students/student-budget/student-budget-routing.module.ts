import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentBudgetPage } from './student-budget.page';

const routes: Routes = [
  {
    path: '',
    component: StudentBudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentBudgetPageRoutingModule {}
