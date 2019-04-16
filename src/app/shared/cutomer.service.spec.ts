import { TestBed } from '@angular/core/testing';

import { CutomerService } from './cutomer.service';

describe('CutomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutomerService = TestBed.get(CutomerService);
    expect(service).toBeTruthy();
  });
});
