import { TestBed } from '@angular/core/testing';

import { CommunityPartnerService } from './community-partner.service';

describe('CommunityPartnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunityPartnerService = TestBed.get(CommunityPartnerService);
    expect(service).toBeTruthy();
  });
});
