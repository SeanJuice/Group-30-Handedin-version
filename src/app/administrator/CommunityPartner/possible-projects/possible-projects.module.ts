import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PossibleProjectsPageRoutingModule } from './possible-projects-routing.module';

import { PossibleProjectsPage } from './possible-projects.page';
import { PossibleProjectComponent } from './possible-project/possible-project.component';
import { AddmodalComponent } from './addmodal/addmodal.component';

import {MatSelectModule} from '@angular/material/select';
import { FilterPipe } from '../available/filter.pipe';
@NgModule({
  entryComponents:[PossibleProjectComponent,AddmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PossibleProjectsPageRoutingModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  declarations: [PossibleProjectsPage,PossibleProjectComponent,AddmodalComponent,FilterPipe]
})
export class PossibleProjectsPageModule {}
