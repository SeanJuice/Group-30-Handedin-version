import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentBudgetPageRoutingModule } from './student-budget-routing.module';

import { StudentBudgetPage } from './student-budget.page';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  entryComponents:[ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentBudgetPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentBudgetPage,ModalComponent]
})
export class StudentBudgetPageModule {}
