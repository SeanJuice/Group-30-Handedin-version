import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentBudgetPage } from './student-budget.page';

describe('StudentBudgetPage', () => {
  let component: StudentBudgetPage;
  let fixture: ComponentFixture<StudentBudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentBudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentBudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
