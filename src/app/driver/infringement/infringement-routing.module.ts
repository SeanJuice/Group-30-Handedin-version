import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfringementPage } from './infringement.page';

const routes: Routes = [
  {
    path: '',
    component: InfringementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfringementPageRoutingModule {}
