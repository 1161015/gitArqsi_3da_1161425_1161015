import { TestBed } from '@angular/core/testing';

import { EncomendaService } from './encomenda.service';
import { HttpClientModule } from '@angular/common/http';

describe('EncomendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncomendaService = TestBed.get({
      imports: [HttpClientModule]}, EncomendaService);
    expect(service).toBeTruthy();
  });
});
