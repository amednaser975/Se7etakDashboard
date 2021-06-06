import { TestBed } from '@angular/core/testing';

import { LatestOffersService } from './latest-offers.service';

describe('LatestOffersService', () => {
  let service: LatestOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
