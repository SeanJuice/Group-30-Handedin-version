import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JcpToolsPage } from './jcp-tools.page';

const routes: Routes = [
  {
    path: '',
    component: JcpToolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JcpToolsPageRoutingModule {}
