import { TestBed } from '@angular/core/testing';

import { MaterialService } from './material.service';
import { HttpClientModule } from '@angular/common/http';

describe('MaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialService = TestBed.get({
      imports: [HttpClientModule]}, MaterialService);
    expect(service).toBeTruthy();
  });

});
