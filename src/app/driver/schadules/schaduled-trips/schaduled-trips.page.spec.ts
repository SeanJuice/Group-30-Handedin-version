import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchaduledTripsPage } from './schaduled-trips.page';

describe('SchaduledTripsPage', () => {
  let component: SchaduledTripsPage;
  let fixture: ComponentFixture<SchaduledTripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchaduledTripsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchaduledTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
