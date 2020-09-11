import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreinfomodalComponent } from './moreinfomodal.component';

describe('MoreinfomodalComponent', () => {
  let component: MoreinfomodalComponent;
  let fixture: ComponentFixture<MoreinfomodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreinfomodalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreinfomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
