import { TestBed } from '@angular/core/testing';

import { StudProjectService } from './stud-project.service';

describe('StudProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudProjectService = TestBed.get(StudProjectService);
    expect(service).toBeTruthy();
  });
});
