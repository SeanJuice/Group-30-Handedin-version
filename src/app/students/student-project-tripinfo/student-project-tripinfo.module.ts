import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProjectTripinfoPageRoutingModule } from './student-project-tripinfo-routing.module';

import { StudentProjectTripinfoPage } from './student-project-tripinfo.page';
import { DrivermodalComponent } from './drivermodal/drivermodal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';

@NgModule({
  entryComponents:[DrivermodalComponent,EditmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProjectTripinfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentProjectTripinfoPage,DrivermodalComponent,EditmodalComponent]
})
export class StudentProjectTripinfoPageModule {}
