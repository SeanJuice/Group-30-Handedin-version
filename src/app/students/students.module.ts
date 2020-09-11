
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentsPageRoutingModule } from './students-routing.module';

import { StudentsPage } from './students.page';
import { ComponetsModule } from '../Shared/Components.module';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { HomeComponent } from './home/home.component';


//import { BookingsComponent } from './bookings/bookings.component';

@NgModule({
 entryComponents:[NewsfeedComponent,HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentsPageRoutingModule,
    ComponetsModule,
    
  ],
  declarations: [StudentsPage,NewsfeedComponent,HomeComponent]
})
export class StudentsPageModule {}
