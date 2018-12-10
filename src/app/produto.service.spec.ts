import { TestBed } from '@angular/core/testing';

import { ProdutoService } from './produto.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoService = TestBed.get({
      imports: [HttpClientModule]}, ProdutoService);
    expect(service).toBeTruthy();
  });

});
