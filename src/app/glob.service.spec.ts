import { TestBed } from '@angular/core/testing';

import { GlobService } from './glob.service';

describe('GlobService', () => {
  let service: GlobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
