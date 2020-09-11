import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';


import { FolderPage } from './folder.page';

import { DriverFormComponent } from "./driver-form/driver-form.component";
import { InfringementFormComponent } from "./infringement-form/infringement-form.component";
import {ScheduledTripsComponent  } from "./scheduled-trips/scheduled-trips.component";
import { AvailableTripsComponent } from "./available-trips/available-trips.component";
import { ComponetsModule } from "../Shared/Components.module";
import { DNewsFeedComponent } from './dnews-feed/dnews-feed.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    FolderPageRoutingModule,
    ComponetsModule
  ],
  declarations: [FolderPage,DriverFormComponent,InfringementFormComponent,ScheduledTripsComponent,AvailableTripsComponent,DNewsFeedComponent]
})
export class FolderPageModule {}
