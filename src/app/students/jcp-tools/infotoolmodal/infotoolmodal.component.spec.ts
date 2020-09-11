import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfotoolmodalComponent } from './infotoolmodal.component';

describe('InfotoolmodalComponent', () => {
  let component: InfotoolmodalComponent;
  let fixture: ComponentFixture<InfotoolmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotoolmodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfotoolmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
