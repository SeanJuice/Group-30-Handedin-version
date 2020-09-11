import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExisitingDriversPage } from './exisiting-drivers.page';

describe('ExisitingDriversPage', () => {
  let component: ExisitingDriversPage;
  let fixture: ComponentFixture<ExisitingDriversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExisitingDriversPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExisitingDriversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
