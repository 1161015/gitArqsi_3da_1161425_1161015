import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Item } from './item';
import { ItemService } from '../item.service';
import { ProdutoService } from '../produto.service';
import { MaterialService } from '../material.service';
import { CategoriaService } from '../categoria.service';
import { Produto } from '../produto/produto';
import { Material } from '../material/material';
import { Acabamento } from '../acabamento/acabamento';
import { AcabamentoService } from '../acabamento.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemCriar: boolean = false;
  itemEditar: boolean = false;
  itemEdicao: boolean = false;
  itemApagar: boolean = false;
  itensListar: boolean = false;
  statusMessage: string;
  itens: Item[];
  produtos: Produto[];
  materiais: Material[];
  acabamentos: Acabamento[];

  nomeItem: string;
  alturaItem: number;
  larguraItem: number;
  profundidadeItem: number;
  unidadeItem: number;
  pai: number;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private produtoService: ProdutoService,
    private categoriasService: CategoriaService,
    private materiaisService: MaterialService,
    private acabamentoService: AcabamentoService,
    private location: Location) {
  }

  ngOnInit() {
    this.getItens();
    this.getProdutos();
    this.getAcabamentos();
    this.getMateriais();
    console.log(this.itens);
  }


  criarItem() {
    this.itemCriar = true;
    this.itemEditar = false;
    this.itemApagar = false;
    this.itensListar = false;
    this.itemEdicao = false;
  }

  editarItem() {
    this.itemCriar = false;
    this.itemEditar = true;
    this.itemApagar = false;
    this.itensListar = false;
    this.itemEdicao = false;
  }

  apagarItem() {
    this.itemCriar = false;
    this.itemEditar = false;
    this.itemApagar = true;
    this.itensListar = false;
    this.itemEdicao = false;
  }

  listarItens() {
    this.itemCriar = false;
    this.itemEditar = false;
    this.itemApagar = false;
    this.itensListar = true;
    this.itemEdicao = false;
  }

  edicaoItem(id) {
    this.itemService.getItem(id)
      .subscribe(item => {
        console.log(item.name);
        this.nomeItem = item.name;
        this.alturaItem = item.altura;
        this.larguraItem = item.largura;
        this.profundidadeItem = item.profundidade;
        this.unidadeItem = item.unidade;
    },
        error => { this.statusMessage = "Error: Service Unavailable"; });
    this.itemCriar = false;
    this.itemEditar = true;
    this.itemApagar = false;
    this.itensListar = false;
    this.itemEdicao = true;
  }

  getItens(): void {
    this.itemService.getItens()
      .subscribe(itens => {
        this.itens = itens;
        console.log(this.itens);
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

  getAcabamentos(): void {
    this.acabamentoService.getAcabamentos()
      .subscribe(acabamentos => {
        this.acabamentos = acabamentos;
        console.log(this.acabamentos);
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(this.produtos);
      },
        error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  add(name: string, idProduto: number,
    idMaterial: number,
    idAcabamento: number,
    altura: number,
    largura: number,
    profundidade: number,
    unidade: number,
    pai: number): void {
    if (!name) { return; }
    let nomeMaterial;
    let nomeAcabamento;
    let nomeProduto;
    let paiI;
    paiI = pai;
    this.materiaisService.getMaterial(idMaterial).subscribe(material => {
      nomeMaterial = material.descricao;
    });
    this.acabamentoService.getAcabamento(idAcabamento).subscribe(acabamento => {
      nomeAcabamento = acabamento.descricao;
    });
    this.produtoService.getProduto(idProduto).subscribe(produto => {
      nomeProduto = produto.nome;
    });
    this.itemService.addItens({
      name,
      idProduto,
      idMaterial,
      idAcabamento,
      altura,
      largura,
      profundidade,
      unidade,
      nomeProduto,
      nomeMaterial,
      nomeAcabamento
    } as Item)
      .subscribe(item => {
        this.itens.push(item);
      }, error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  delete(item: Item): void {
    this.itens = this.itens.filter(i => i !== item);
    console.log(this.itens);
    console.log(item);
    this.itemService.deleteItem(item).subscribe(() => this.goBack(),
      error => { this.statusMessage = "Error: Service Unavailable"; });
  }

  goBack(): void {
    this.location.back();
  }

  save(idItem: number, name: string, idProduto: number,
    idMaterial: number,
    idAcabamento: number,
    altura: number,
    largura: number,
    profundidade: number,
    unidade: number): void {
    if (!name) { return; }
    let nomeMaterial;
    let nomeAcabamento;
    let nomeProduto;
    let _id;
    _id = idItem;
    this.materiaisService.getMaterial(idMaterial).subscribe(material => {
      nomeMaterial = material.descricao;
    });
    this.acabamentoService.getAcabamento(idAcabamento).subscribe(acabamento => {
      nomeAcabamento = acabamento.descricao;
    });
    this.produtoService.getProduto(idProduto).subscribe(produto => {
      nomeProduto = produto.nome;
    })
    this.itemService.updateItem({
      _id,
      name,
      idProduto,
      idMaterial,
      idAcabamento,
      altura,
      largura,
      profundidade,
      unidade,
      nomeProduto,
      nomeMaterial,
      nomeAcabamento
    } as Item)
      .subscribe(item => {
        this.itens.push(item);
      }, error => { this.statusMessage = "Error: Service Unavailable"; });
  }


}
