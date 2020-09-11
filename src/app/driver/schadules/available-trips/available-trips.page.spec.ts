import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvailableTripsPage } from './available-trips.page';

describe('AvailableTripsPage', () => {
  let component: AvailableTripsPage;
  let fixture: ComponentFixture<AvailableTripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableTripsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvailableTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
