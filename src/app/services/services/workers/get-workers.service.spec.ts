import { TestBed } from '@angular/core/testing';

import { GetWorkersService } from './get-workers.service';

describe('GetWorkersService', () => {
  let service: GetWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
