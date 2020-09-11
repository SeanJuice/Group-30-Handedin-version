import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentProjectTripinfoPage } from './student-project-tripinfo.page';

describe('StudentProjectTripinfoPage', () => {
  let component: StudentProjectTripinfoPage;
  let fixture: ComponentFixture<StudentProjectTripinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectTripinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentProjectTripinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
