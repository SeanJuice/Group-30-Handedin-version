import { TestBed } from '@angular/core/testing';

import { TripInfoService } from './trip-info.service';

describe('TripInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripInfoService = TestBed.get(TripInfoService);
    expect(service).toBeTruthy();
  });
});
