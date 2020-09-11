import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExisitingDriversPage } from './exisiting-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: ExisitingDriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExisitingDriversPageRoutingModule {}
