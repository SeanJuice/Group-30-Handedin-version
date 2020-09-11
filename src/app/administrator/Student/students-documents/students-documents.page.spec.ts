import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudentsDocumentsPage } from './students-documents.page';

describe('StudentsDocumentsPage', () => {
  let component: StudentsDocumentsPage;
  let fixture: ComponentFixture<StudentsDocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDocumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
