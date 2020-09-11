import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { CpDocFilterPipe } from './cp-doc-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DocumentsPageRoutingModule
  ],
  declarations: [DocumentsPage,UploadModalComponent, CpDocFilterPipe]
})
export class DocumentsPageModule {}
