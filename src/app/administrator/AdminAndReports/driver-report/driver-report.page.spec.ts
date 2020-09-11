import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverReportPage } from './driver-report.page';

describe('DriverReportPage', () => {
  let component: DriverReportPage;
  let fixture: ComponentFixture<DriverReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
