import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPageRoutingModule } from './documents-routing.module';

import { DocumentsPage } from './documents.page';
import { UploadModalComponent } from './upload-modal/upload-modal.component';

@NgModule({
  entryComponents:[UploadModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DocumentsPage,UploadModalComponent]
})
export class DocumentsPageModule {}
