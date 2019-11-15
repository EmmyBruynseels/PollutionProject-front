import { TestBed } from '@angular/core/testing';

import { CountryPollutionService } from './country-pollution.service';

describe('CountryPollutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryPollutionService = TestBed.get(CountryPollutionService);
    expect(service).toBeTruthy();
  });
});
