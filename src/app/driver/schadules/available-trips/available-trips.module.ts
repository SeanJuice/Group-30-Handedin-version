import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailableTripsPageRoutingModule } from './available-trips-routing.module';

import { AvailableTripsPage } from './available-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailableTripsPageRoutingModule
  ],
  declarations: [AvailableTripsPage]
})
export class AvailableTripsPageModule {}
