import { TestBed } from '@angular/core/testing';

import { DriverReportService } from './driver-report.service';

describe('DriverReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverReportService = TestBed.get(DriverReportService);
    expect(service).toBeTruthy();
  });
});
