import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpApplicationsPageRoutingModule } from './cp-applications-routing.module';

import { CpApplicationsPage } from './cp-applications.page';
import { AdminNavigationModule } from 'src/app/Shared/AdminNavigation.module';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[ModalComponent,AddModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpApplicationsPageRoutingModule,AdminNavigationModule
  ],
  declarations: [CpApplicationsPage,ModalComponent,AddModalComponent, FilterPipe]
})
export class CpApplicationsPageModule {}
