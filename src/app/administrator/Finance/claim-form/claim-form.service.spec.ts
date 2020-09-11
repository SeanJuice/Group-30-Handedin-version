import { TestBed } from '@angular/core/testing';

import { ClaimFormService } from './claim-form.service';

describe('ClaimFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimFormService = TestBed.get(ClaimFormService);
    expect(service).toBeTruthy();
  });
});
