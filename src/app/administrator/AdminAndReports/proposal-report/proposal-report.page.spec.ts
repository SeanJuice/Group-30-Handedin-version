import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProposalReportPage } from './proposal-report.page';

describe('ProposalReportPage', () => {
  let component: ProposalReportPage;
  let fixture: ComponentFixture<ProposalReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProposalReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
