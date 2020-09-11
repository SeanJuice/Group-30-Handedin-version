import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentDocumentsPageRoutingModule } from './student-documents-routing.module';

import { StudentDocumentsPage } from './student-documents.page';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentDocumentsPageRoutingModule
  ],
  declarations: [StudentDocumentsPage,ModalComponent, FilterPipe]
})
export class StudentDocumentsPageModule {}
