import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentProjectsPage } from './student-projects.page';

describe('StudentProjectsPage', () => {
  let component: StudentProjectsPage;
  let fixture: ComponentFixture<StudentProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
