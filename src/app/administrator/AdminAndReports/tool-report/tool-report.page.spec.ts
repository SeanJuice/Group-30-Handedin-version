import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolReportPage } from './tool-report.page';

describe('ToolReportPage', () => {
  let component: ToolReportPage;
  let fixture: ComponentFixture<ToolReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
