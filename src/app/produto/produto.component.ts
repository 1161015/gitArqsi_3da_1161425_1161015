import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from './produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  produtos: Produto[];
  statusMessage: string;
  produtoCriar: boolean = false;
  produtoEditar: boolean = false;
  produtoApagar: boolean = false;
  produtosListar: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private location: Location
  ) { }

  criarProduto() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
  }

  editarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = true;
    this.produtoApagar = false;
    this.produtosListar = false;
  }

  apagarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = false;
    this.produtoApagar = true;
    this.produtosListar = false;
  }

  listarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = true;
  }


  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe(produtos => this.produtos = produtos,
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  delete(produto: Produto): void {
    this.produtos = this.produtos.filter(p => p !== produto);
    this.produtoService.deleteProduto(produto).subscribe( 
      error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!name) { return; }
    this.produtoService.addProduto({ nome } as Produto)
      .subscribe(produto => {
        this.produtos.push(produto);
      }, error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  ngOnInit() {
    this.getProdutos();
  }

  goBack(): void {
    this.location.back();
  }

  save(produto): void {
    this.produtoService.updateProduto(produto)
      .subscribe(() => this.goBack(), error => { this.statusMessage = "Error: Service Unavailable"; });
  }
}
