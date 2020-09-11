import { TestBed } from '@angular/core/testing';

import { AvailableTripsService } from './available-trips.service';

describe('AvailableTripsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableTripsService = TestBed.get(AvailableTripsService);
    expect(service).toBeTruthy();
  });
});
