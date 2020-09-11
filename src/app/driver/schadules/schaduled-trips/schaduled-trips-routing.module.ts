import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchaduledTripsPage } from './schaduled-trips.page';

const routes: Routes = [
  {
    path: '',
    component: SchaduledTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchaduledTripsPageRoutingModule {}
