import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverApplicationPage } from './driver-application.page';

describe('DriverApplicationPage', () => {
  let component: DriverApplicationPage;
  let fixture: ComponentFixture<DriverApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverApplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
