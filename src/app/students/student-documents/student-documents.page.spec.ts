import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentDocumentsPage } from './student-documents.page';

describe('StudentDocumentsPage', () => {
  let component: StudentDocumentsPage;
  let fixture: ComponentFixture<StudentDocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDocumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
