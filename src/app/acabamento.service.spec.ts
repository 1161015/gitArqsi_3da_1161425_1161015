import { TestBed } from '@angular/core/testing';

import { AcabamentoService } from './acabamento.service';
import { HttpClientModule } from '@angular/common/http';

describe('AcabementoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcabamentoService = TestBed.get({
      imports: [HttpClientModule]}, AcabamentoService);
    expect(service).toBeTruthy();
  });

});
