import { TestBed } from '@angular/core/testing';

import { ContinentPollutionService } from './continent-pollution.service';

describe('ContinentPollutionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContinentPollutionService = TestBed.get(ContinentPollutionService);
    expect(service).toBeTruthy();
  });
});
