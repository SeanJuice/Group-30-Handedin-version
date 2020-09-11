import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsDocumentsPageRoutingModule } from './students-documents-routing.module';

import { StudentsDocumentsPage } from './students-documents.page';
import { StudentDocumentsComponent } from './student-documents/student-documents.component';

@NgModule({
  entryComponents:[StudentDocumentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsDocumentsPageRoutingModule
  ],
  declarations: [StudentsDocumentsPage,StudentDocumentsComponent]
})
export class StudentsDocumentsPageModule {}
