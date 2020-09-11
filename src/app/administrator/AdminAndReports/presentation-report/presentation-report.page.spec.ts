import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresentationReportPage } from './presentation-report.page';

describe('PresentationReportPage', () => {
  let component: PresentationReportPage;
  let fixture: ComponentFixture<PresentationReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
