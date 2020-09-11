import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProjectinfoPageRoutingModule } from './student-projectinfo-routing.module';

import { StudentProjectinfoPage } from './student-projectinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProjectinfoPageRoutingModule
  ],
  declarations: [StudentProjectinfoPage]
})
export class StudentProjectinfoPageModule {}
