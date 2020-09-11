import { TestBed } from '@angular/core/testing';

import { TooRequestService } from './too-request.service';

describe('TooRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TooRequestService = TestBed.get(TooRequestService);
    expect(service).toBeTruthy();
  });
});
