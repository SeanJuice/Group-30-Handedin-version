import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchaduledTripsPageRoutingModule } from './schaduled-trips-routing.module';

import { SchaduledTripsPage } from './schaduled-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchaduledTripsPageRoutingModule
  ],
  declarations: [SchaduledTripsPage]
})
export class SchaduledTripsPageModule {}
