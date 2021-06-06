import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './settings.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
