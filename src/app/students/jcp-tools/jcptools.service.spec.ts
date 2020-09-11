import { TestBed } from '@angular/core/testing';

import { JcptoolsService } from './jcptools.service';

describe('JcptoolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JcptoolsService = TestBed.get(JcptoolsService);
    expect(service).toBeTruthy();
  });
});
