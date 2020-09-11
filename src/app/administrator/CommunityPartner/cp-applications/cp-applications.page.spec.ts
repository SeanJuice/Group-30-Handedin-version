import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpApplicationsPage } from './cp-applications.page';

describe('CpApplicationsPage', () => {
  let component: CpApplicationsPage;
  let fixture: ComponentFixture<CpApplicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpApplicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpApplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
