import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExternalStudentsPage } from './external-students.page';

describe('ExternalStudentsPage', () => {
  let component: ExternalStudentsPage;
  let fixture: ComponentFixture<ExternalStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
