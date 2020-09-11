import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTripPageRoutingModule } from './book-trip-routing.module';

import { BookTripPage } from './book-trip.page';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  entryComponents:[MapComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTripPageRoutingModule,
    ReactiveFormsModule,AgmCoreModule
    
  ],
  declarations: [BookTripPage,MapComponent]
})
export class BookTripPageModule {}
