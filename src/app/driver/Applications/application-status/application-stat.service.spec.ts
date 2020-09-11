import { TestBed } from '@angular/core/testing';

import { ApplicationStatService } from './application-stat.service';

describe('ApplicationStatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationStatService = TestBed.get(ApplicationStatService);
    expect(service).toBeTruthy();
  });
});
