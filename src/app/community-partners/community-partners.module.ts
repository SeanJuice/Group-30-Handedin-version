import { CNewsFeedComponent } from './c-news-feed/c-news-feed.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunityPartnersPageRoutingModule } from './community-partners-routing.module';

import { CommunityPartnersPage } from './community-partners.page';
import { ComponetsModule } from '../Shared/Components.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  entryComponents:[CNewsFeedComponent,HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunityPartnersPageRoutingModule,
    ComponetsModule
  ],
  declarations: [CommunityPartnersPage,CNewsFeedComponent,HomeComponent]
})
export class CommunityPartnersPageModule {}
