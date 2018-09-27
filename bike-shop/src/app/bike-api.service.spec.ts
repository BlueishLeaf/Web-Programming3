import { TestBed } from '@angular/core/testing';

import { BikeApiService } from './bike-api.service';

describe('BikeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeApiService = TestBed.get(BikeApiService);
    expect(service).toBeTruthy();
  });
});
