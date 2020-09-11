import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolRequestinfoPage } from './tool-requestinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ToolRequestinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRequestinfoPageRoutingModule {}
