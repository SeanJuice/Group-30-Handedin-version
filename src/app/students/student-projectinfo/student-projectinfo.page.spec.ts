import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentProjectinfoPage } from './student-projectinfo.page';

describe('StudentProjectinfoPage', () => {
  let component: StudentProjectinfoPage;
  let fixture: ComponentFixture<StudentProjectinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentProjectinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
