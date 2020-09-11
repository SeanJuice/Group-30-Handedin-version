import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentProjectsPageRoutingModule } from './student-projects-routing.module';

import { StudentProjectsPage } from './student-projects.page';
import { ProjectsComponent } from './projects/projects.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentProjectsPageRoutingModule
  ],
  declarations: [StudentProjectsPage,ProjectsComponent, FilterPipe]
})
export class StudentProjectsPageModule {}
