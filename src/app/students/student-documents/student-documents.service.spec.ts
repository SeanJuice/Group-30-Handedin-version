import { TestBed } from '@angular/core/testing';

import { StudentDocumentsService } from './student-documents.service';

describe('StudentDocumentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentDocumentsService = TestBed.get(StudentDocumentsService);
    expect(service).toBeTruthy();
  });
});
