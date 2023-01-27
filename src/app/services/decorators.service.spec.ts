import { TestBed } from '@angular/core/testing';

import { DecoratorsService } from './decorators.service';

describe('DecoratorsService', () => {
  let service: DecoratorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecoratorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
