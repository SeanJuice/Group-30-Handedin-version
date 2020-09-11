import { TestBed } from '@angular/core/testing';

import { ExistingDriverService } from './existing-driver.service';

describe('ExistingDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExistingDriverService = TestBed.get(ExistingDriverService);
    expect(service).toBeTruthy();
  });
});
