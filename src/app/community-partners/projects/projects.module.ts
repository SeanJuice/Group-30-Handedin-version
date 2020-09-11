import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsPageRoutingModule } from './projects-routing.module';

import { ProjectsPage } from './projects.page';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { AdminNavigationModule } from 'src/app/Shared/AdminNavigation.module';
import { filter } from 'rxjs/operators';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[ModalComponent,AddModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ProjectsPageRoutingModule,
    AdminNavigationModule
  ],
  declarations: [ProjectsPage,ModalComponent,AddModalComponent, FilterPipe]
})
export class ProjectsPageModule {}
