import { TestBed } from '@angular/core/testing';

import { SetReminderService } from './set-reminder.service';

describe('SetReminderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetReminderService = TestBed.get(SetReminderService);
    expect(service).toBeTruthy();
  });
});
