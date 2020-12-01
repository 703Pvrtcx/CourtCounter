import { TestBed } from '@angular/core/testing';

import { CourterService } from './courter.service';

describe('CourterService', () => {
  let service: CourterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
