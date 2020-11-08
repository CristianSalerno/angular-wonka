import { TestBed } from '@angular/core/testing';

import { WorkerInfoService } from './worker-info.service';

describe('WorkerInfoService', () => {
  let service: WorkerInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
