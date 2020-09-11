import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentGroupPage } from './student-group.page';

describe('StudentGroupPage', () => {
  let component: StudentGroupPage;
  let fixture: ComponentFixture<StudentGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
