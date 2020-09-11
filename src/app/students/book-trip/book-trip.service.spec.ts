import { TestBed } from '@angular/core/testing';

import { BookTripService } from './book-trip.service';

describe('BookTripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookTripService = TestBed.get(BookTripService);
    expect(service).toBeTruthy();
  });
});
