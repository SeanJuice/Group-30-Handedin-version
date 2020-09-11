import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentGroupAccountsPage } from './student-group-accounts.page';

describe('StudentGroupAccountsPage', () => {
  let component: StudentGroupAccountsPage;
  let fixture: ComponentFixture<StudentGroupAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupAccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentGroupAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
