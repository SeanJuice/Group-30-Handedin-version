import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalStudentsPageRoutingModule } from './external-students-routing.module';

import { ExternalStudentsPage } from './external-students.page';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[ModalComponent,AddModalComponent, CertificateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ExternalStudentsPageRoutingModule
  ],
  declarations: [ExternalStudentsPage,ModalComponent,AddModalComponent, CertificateComponent, FilterPipe]
})
export class ExternalStudentsPageModule {}
