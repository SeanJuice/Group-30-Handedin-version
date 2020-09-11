import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingCPPage } from './existing-cp.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ExistingCPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class ExistingCPPageRoutingModule {}
