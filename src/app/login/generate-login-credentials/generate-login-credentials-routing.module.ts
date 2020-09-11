import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateLoginCredentialsPage } from './generate-login-credentials.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateLoginCredentialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateLoginCredentialsPageRoutingModule {}
