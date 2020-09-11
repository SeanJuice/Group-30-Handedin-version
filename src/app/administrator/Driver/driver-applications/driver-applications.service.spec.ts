import { TestBed } from '@angular/core/testing';

import { DriverApplicationsService } from './driver-applications.service';

describe('DriverApplicationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverApplicationsService = TestBed.get(DriverApplicationsService);
    expect(service).toBeTruthy();
  });
});
