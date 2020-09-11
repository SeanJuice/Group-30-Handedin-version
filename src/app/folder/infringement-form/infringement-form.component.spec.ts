import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfringementFormComponent } from './infringement-form.component';

describe('InfringementFormComponent', () => {
  let component: InfringementFormComponent;
  let fixture: ComponentFixture<InfringementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfringementFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfringementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
