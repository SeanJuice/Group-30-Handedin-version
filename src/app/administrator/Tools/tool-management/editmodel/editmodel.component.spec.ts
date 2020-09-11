import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmodelComponent } from './editmodel.component';

describe('EditmodelComponent', () => {
  let component: EditmodelComponent;
  let fixture: ComponentFixture<EditmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmodelComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
