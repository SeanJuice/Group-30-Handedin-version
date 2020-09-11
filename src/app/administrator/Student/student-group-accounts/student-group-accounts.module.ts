import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentGroupAccountsPageRoutingModule } from './student-group-accounts-routing.module';

import { StudentGroupAccountsPage } from './student-group-accounts.page';
import { StudentGroupAccountComponent } from './student-group-account/student-group-account.component';
import { AllocateAmountComponent } from './allocate-amount/allocate-amount.component';

@NgModule({
  entryComponents:[StudentGroupAccountComponent,AllocateAmountComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentGroupAccountsPageRoutingModule
  ],
  declarations: [StudentGroupAccountsPage,StudentGroupAccountComponent,AllocateAmountComponent]
})
export class StudentGroupAccountsPageModule {}
