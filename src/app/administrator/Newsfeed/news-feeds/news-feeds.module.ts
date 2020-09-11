import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsFeedsPageRoutingModule } from './news-feeds-routing.module';
import {MatButtonModule} from '@angular/material/button';

import { NewsFeedsPage } from './news-feeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsFeedsPageRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ],
  declarations: [NewsFeedsPage]
})
export class NewsFeedsPageModule {}
