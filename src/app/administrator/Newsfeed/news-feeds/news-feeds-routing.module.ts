import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsFeedsPage } from './news-feeds.page';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsFeedsPageRoutingModule {}
