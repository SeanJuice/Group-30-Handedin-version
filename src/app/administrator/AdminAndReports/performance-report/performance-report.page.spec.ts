import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerformanceReportPage } from './performance-report.page';

describe('PerformanceReportPage', () => {
  let component: PerformanceReportPage;
  let fixture: ComponentFixture<PerformanceReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
