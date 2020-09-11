import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverPageRoutingModule } from './driver-routing.module';

import { DriverPage } from './driver.page';
import { ComponetsModule } from '../Shared/Components.module';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  entryComponents:[NewsfeedComponent,HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverPageRoutingModule,
    
    ComponetsModule
  ],
  declarations: [DriverPage,NewsfeedComponent,HomeComponent]
})
export class DriverPageModule {}
