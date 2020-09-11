import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvailableTripsPage } from './available-trips.page';

const routes: Routes = [
  {
    path: '',
    component: AvailableTripsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailableTripsPageRoutingModule {}
