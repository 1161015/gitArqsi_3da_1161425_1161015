import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Produto } from './produto';
import { Categoria } from '../categoria/categoria';
import { Material } from '../material/material';
import { ProdutoService } from '../produto.service';
import { CategoriaService } from '../categoria.service';
import { MaterialService } from '../material.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent implements OnInit {
  produtos: Produto[];
  filhos: number[];
  filhosProduto: Produto[];
  obrigatoriedade: boolean;
  categorias: Categoria[];
  materiais: Material[];
  dimensao: number[];
  statusMessage: string;
  nomeProduto: string;
  ocupMin: number;
  ocupMax: number;
  alturaMinima: number;
  alturaMaxima: number;
  larguraMinima: number;
  larguraMaxima: number;
  profundidadeMinima: number;
  profundidadeMaxima: number;
  unidade: string;
  altura: number;
  largura: number;
  profundidade: number;
  alturasDiscreta: number[] = [];
  largurasDiscreta: number[] = [];
  profundidadesDiscreta: number[] = [];
  materialAcabamento: boolean;
  materialProduto: Material[];
  categoriaProduto: Categoria;
  produtoCriar: boolean = false;
  produtoEditar: boolean = false;
  produtoApagar: boolean = false;
  produtosListar: boolean = false;
  continuaA: boolean = false;
  discretaA: boolean = false;
  continuaL: boolean = false;
  discretaL: boolean = false;
  continuaP: boolean = false;
  discretaP: boolean = false;
  produtoEdicao: boolean = false;
  produtoListar: boolean = false;

  categoriaProdutoEdicao: string;
  ocupacaominima: number;
  ocupacaomaxima: number;
  idCategoria: number;
  nomeProdutoEd: string;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriasService: CategoriaService,
    private materiaisService: MaterialService,
    private location: Location
  ) { }

  adicionarAltura(altura: number) {
    this.alturasDiscreta.push(altura);
  }

  adicionarLargura(largura: number) {
    this.largurasDiscreta.push(largura);
  }

  adicionarProfundidade(profundidade: number) {
    this.profundidadesDiscreta.push(profundidade);
  }

  criarProduto() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarContinuaA() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = true;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarDiscretaA() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = true;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarContinuaP() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = true;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarDiscretaP() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = true;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarContinuaL() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = true;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  chamarDiscretaL() {
    this.produtoCriar = true;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = true;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  editarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = true;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  edicaoProduto(id) {
    this.produtoService.getProduto(id)
      .subscribe(produto => {
        this.nomeProdutoEd = produto.nome;
        this.categoriaProdutoEdicao = produto.categoria.taxonomia;
        this.ocupacaominima = produto.restricao.minOcupacao;
        this.ocupacaomaxima = produto.restricao.maxOcupacao;
        this.idCategoria = produto.categoriaID;
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
    this.produtoCriar = false;
    this.produtoEditar = true;
    this.produtoApagar = false;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = true;
    this.produtoListar = false;
  }

  apagarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = false;
    this.produtoApagar = true;
    this.produtosListar = false;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  listarProduto() {
    this.produtoCriar = false;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = true;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = false;
  }

  listarProdutoEsp() {
    this.produtoCriar = false;
    this.produtoEditar = false;
    this.produtoApagar = false;
    this.produtosListar = true;
    this.continuaA = false;
    this.discretaA = false;
    this.continuaL = false;
    this.discretaL = false;
    this.continuaP = false;
    this.discretaP = false;
    this.produtoEdicao = false;
    this.produtoListar = true;
  }


  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(this.produtos);
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  getCategorias(): void {
    this.categoriasService.getCategorias()
      .subscribe(categorias => {
        this.categorias = categorias;
        console.log(this.categorias);
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  getMateriais(): void {
    this.materiaisService.getMateriais()
      .subscribe(materiais => {
        this.materiais = materiais;
        console.log(this.materiais);
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  delete(produto: Produto): void {
    this.filhosProduto = [];
    let partes = [];
    let i;
    console.log(produto.partes)
    if (produto.partes != null || produto.partes.length > 0) {
      for (i = 0; i < produto.partes.length; i++) {
        this.produtoService.getProduto(produto.partes[i].filhoID)
          .subscribe(produtoF => {
            this.filhosProduto.push(produtoF);
            this.produtos = this.produtos.filter(p => p !== produtoF);
            this.produtoService.deleteProduto(produtoF).subscribe(
              error => { this.statusMessage = "Error: Service Unavailable"; });
          },
            error => { this.statusMessage = "Error: Service Unavailable"; });
      }
    }
    this.produtos = this.produtos.filter(p => p !== produto);
    console.log(this.produtos);
    this.produtoService.deleteProduto(produto).subscribe(() => this.goBack(),
      error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  add(nome: string): void {
    //let nome = (<HTMLInputElement>document.getElementById("nomeProduto")).value;
    console.log(nome);
    let categoria;
    categoria = {
      id: this.categoriaProduto.id,
      taxonomia: this.categoriaProduto.taxonomia,
      categoriaPaiID: this.categoriaProduto.categoriaPaiID
    }
    let partes = [];
    let i;
    for (i = 0; i < this.filhos.length; i++) {
      partes[i] = { filhoID: this.filhos[i], obrigatoriedade: this.obrigatoriedade }
    }
    let materiaisP = [];
    for (i = 0; i < this.materialProduto.length; i++) {
      materiaisP[i] = { materialID: this.materialProduto[i].id }
    }
    let dimensoes;
    if (this.alturasDiscreta == null || this.alturasDiscreta.length == 0
      || this.largurasDiscreta == null || this.largurasDiscreta.length == 0
      || this.profundidadesDiscreta == null || this.profundidadesDiscreta.length == 0) {
      dimensoes = {
        altura: {
          min: this.alturaMinima,
          max: this.alturaMaxima,
          discreta: null
        },
        largura: {
          min: this.alturaMinima,
          max: this.alturaMaxima,
          discreta: null
        },
        profundidade: {
          min: this.profundidadeMinima,
          max: this.profundidadeMaxima,
          discreta: null
        },
        unidade: {
          tipoUnidades: this.unidade
        }
      }
    } else {
      let discretasA = [];
      for (i = 0; i < this.alturasDiscreta.length; i++) {
        discretasA[i] = { valor: this.alturasDiscreta[i] }
      }
      let discretasL = [];
      for (i = 0; i < this.largurasDiscreta.length; i++) {
        discretasL[i] = { valor: this.largurasDiscreta[i] }
      }
      let discretasP = [];
      for (i = 0; i < this.profundidadesDiscreta.length; i++) {
        discretasP[i] = { valor: this.profundidadesDiscreta[i] }
      }
      dimensoes = {
        altura: {
          min: null,
          max: null,
          discreta: discretasA
        },
        largura: {
          min: null,
          max: null,
          discreta: discretasL
        },
        profundidade: {
          min: null,
          max: null,
          discreta: discretasP
        },
        unidade: {
          tipoUnidades: this.unidade
        }
      }
    }

    let restricao;
    restricao = {
      materialAcabamento: this.materialAcabamento,
      minOcupacao: this.ocupMin,
      maxOcupacao: this.ocupMax
    }
    let categoriaID;
    categoriaID = this.categoriaProduto.id;
    console.log(categoria);
    console.log(categoriaID);
    console.log(materiaisP);
    console.log(dimensoes);
    console.log(restricao);
    if (!nome) { return; }
    this.produtoService.addProduto({
      nome,
      categoriaID,
      partes,
      materiais: materiaisP,
      dimensoes,
      restricao
    } as Produto)
      .subscribe(produto => {
        this.produtos.push(produto);
      }, error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
    this.getMateriais();
  }

  goBack(): void {
    this.location.back();
  }

  save(idProdutoEdicao: number): void {
    let materiaisP = [];
    let i;
    for (i = 0; i < this.materialProduto.length; i++) {
      materiaisP[i] = { materialID: this.materialProduto[i].id }
    }
    let partes = [];
    for (i = 0; i < this.filhos.length; i++) {
      partes[i] = { filhoID: this.filhos[i], obrigatoriedade: this.obrigatoriedade }
    }
    let dimensoes;
    if (this.alturasDiscreta == null || this.alturasDiscreta.length == 0
      || this.largurasDiscreta == null || this.largurasDiscreta.length == 0
      || this.profundidadesDiscreta == null || this.profundidadesDiscreta.length == 0) {
      dimensoes = {
        altura: {
          min: this.alturaMinima,
          max: this.alturaMaxima,
          discreta: null
        },
        largura: {
          min: this.alturaMinima,
          max: this.alturaMaxima,
          discreta: null
        },
        profundidade: {
          min: this.profundidadeMinima,
          max: this.profundidadeMaxima,
          discreta: null
        },
        unidade: {
          tipoUnidades: this.unidade
        }
      }
    } else {
      let discretasA = [];
      for (i = 0; i < this.alturasDiscreta.length; i++) {
        discretasA[i] = { valor: this.alturasDiscreta[i] }
      }
      let discretasL = [];
      for (i = 0; i < this.largurasDiscreta.length; i++) {
        discretasL[i] = { valor: this.largurasDiscreta[i] }
      }
      let discretasP = [];
      for (i = 0; i < this.profundidadesDiscreta.length; i++) {
        discretasP[i] = { valor: this.profundidadesDiscreta[i] }
      }
      dimensoes = {
        altura: {
          min: null,
          max: null,
          discreta: discretasA
        },
        largura: {
          min: null,
          max: null,
          discreta: discretasL
        },
        profundidade: {
          min: null,
          max: null,
          discreta: discretasP
        },
        unidade: {
          tipoUnidades: this.unidade
        }
      }
    }

    let restricao;
    restricao = {
      materialAcabamento: this.materialAcabamento,
      minOcupacao: this.ocupMin,
      maxOcupacao: this.ocupMax
    }
    let id;
    id = idProdutoEdicao;
    let nome;
    nome = this.nomeProdutoEd;
    let categoriaID;
    categoriaID = this.idCategoria;
    if (!this.nomeProdutoEd) { return; }
    this.produtoService.updateProduto({
      id,
      nome,
      categoriaID,
      partes,
      materiais: materiaisP,
      dimensoes,
      restricao
    } as Produto)
      .subscribe(produto => {
        this.produtos.push(produto);
      }, error => { this.statusMessage = "Error: Service Unavailable"; });
  }
}
