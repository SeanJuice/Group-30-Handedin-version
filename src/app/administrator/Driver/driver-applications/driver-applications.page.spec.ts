import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverApplicationsPage } from './driver-applications.page';

describe('DriverApplicationsPage', () => {
  let component: DriverApplicationsPage;
  let fixture: ComponentFixture<DriverApplicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverApplicationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverApplicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
