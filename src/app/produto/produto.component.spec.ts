import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoComponent } from './produto.component';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { compilePipe } from '@angular/core/src/render3/jit/pipe';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoComponent ],
      imports:[MatSelectModule, MatInputModule, FormsModule, RouterTestingModule,
         HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.produtoCriar).toBe(false, 'off at first');
    component.criarProduto();
    expect(component.produtoCriar).toBe(true, 'on after click');
    component.apagarProduto();
    expect(component.produtoCriar).toBe(false, 'off after second click');
  });

  it('#apagarProduto() should toggle #isOn', () => {
    expect(component.produtoApagar).toBe(false, 'off at first');
    component.apagarProduto();
    expect(component.produtoApagar).toBe(true, 'on after click');
    component.editarProduto();
    expect(component.produtoApagar).toBe(false, 'off after second click');
  });

  it('#editarProduto() should toggle #isOn', () => {
    expect(component.produtosListar).toBe(false, 'off at first');
    component.listarProduto();
    expect(component.produtosListar).toBe(true, 'on after click');
    component.apagarProduto();
    expect(component.produtosListar).toBe(false, 'off after second click');
  });

});


