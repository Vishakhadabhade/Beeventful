import { TestBed } from '@angular/core/testing';

import { CaterersService } from './caterers.service';

describe('CaterersService', () => {
  let service: CaterersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaterersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
