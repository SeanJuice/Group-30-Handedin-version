import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateLoginCredentialsPageRoutingModule } from './generate-login-credentials-routing.module';

import { GenerateLoginCredentialsPage } from './generate-login-credentials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateLoginCredentialsPageRoutingModule
  ],
  declarations: [GenerateLoginCredentialsPage]
})
export class GenerateLoginCredentialsPageModule {}
