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
  produtoCriar : boolean = false;
  produtoEditar : boolean = false;
  produtoApagar : boolean = false;
  produtosListar : boolean = false;
  produtoProcurar : boolean = false;

  @Input() produto: Produto = {
    id: 1,
    nome: 'Armário'
  };

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private location: Location
  ) { }

  criarProduto(){
    this.produtoCriar=true;
    this.produtoEditar=false;
    this.produtoApagar=false;
    this.produtoProcurar=false;
    this.produtosListar=false;
  }

  editarProduto(){
    this.produtoCriar=false;
    this.produtoEditar=true;
    this.produtoApagar=false;
    this.produtoProcurar=false;
    this.produtosListar=false;
  }

  apagarProduto(){
    this.produtoCriar=false;
    this.produtoEditar=false;
    this.produtoApagar=true;
    this.produtoProcurar=false;
    this.produtosListar=false;
  }

  listarProduto(){
    this.produtoCriar=false;
    this.produtoEditar=false;
    this.produtoApagar=false;
    this.produtoProcurar=false;
    this.produtosListar=true;
  }

  procurarProduto(){
    this.produtoCriar=false;
    this.produtoEditar=false;
    this.produtoApagar=false;
    this.produtoProcurar=true;
    this.produtosListar=false;
  }

  
  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  delete(produto: Produto): void {
    this.produtos = this.produtos.filter(p => p !== produto);
    this.produtoService.deleteProduto(produto).subscribe();
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!name) { return; }
    this.produtoService.addProduto({ nome } as Produto)
      .subscribe(produto => {
        this.produtos.push(produto);
      });
  }

  ngOnInit() {
    //this.getProdutos();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.produtoService.updateProduto(this.produto)
      .subscribe(() => this.goBack());
  }
}
