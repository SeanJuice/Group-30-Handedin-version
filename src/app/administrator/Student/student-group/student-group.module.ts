import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentGroupPageRoutingModule } from './student-group-routing.module';

import { StudentGroupPage } from './student-group.page';
import { StudentGroupsComponent } from './student-groups/student-groups.component';

@NgModule({
  entryComponents:[StudentGroupsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentGroupPageRoutingModule
  ],
  declarations: [StudentGroupPage,StudentGroupsComponent]
})
export class StudentGroupPageModule {}
