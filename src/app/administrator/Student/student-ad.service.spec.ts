import { TestBed } from '@angular/core/testing';

import { StudentAdService } from './student-ad.service';

describe('StudentAdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentAdService = TestBed.get(StudentAdService);
    expect(service).toBeTruthy();
  });
});
