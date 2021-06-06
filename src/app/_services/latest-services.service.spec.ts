import { TestBed } from '@angular/core/testing';

import { LatestServicesService } from './latest-services.service';

describe('LatestServicesService', () => {
  let service: LatestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
