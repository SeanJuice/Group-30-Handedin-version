import { TestBed } from '@angular/core/testing';

import { InfingementService } from './infingement.service';

describe('InfingementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfingementService = TestBed.get(InfingementService);
    expect(service).toBeTruthy();
  });
});
