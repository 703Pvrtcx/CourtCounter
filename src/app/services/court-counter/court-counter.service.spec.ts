import { TestBed } from '@angular/core/testing';

import { CourtCounterService } from './court-counter.service';

describe('CourtCounterService', () => {
  let service: CourtCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
