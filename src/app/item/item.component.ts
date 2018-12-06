import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemCriar : boolean = false;
  itemEditar : boolean = false;
  itemApagar : boolean = false;
  itensListar : boolean = false;
  itemProcurar : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  criarItem(){
    this.itemCriar=true;
    this.itemEditar=false;
    this.itemApagar=false;
    this.itensListar=false;
    this.itemProcurar=false;
  }

  editarItem(){
    this.itemCriar=false;
    this.itemEditar=true;
    this.itemApagar=false;
    this.itensListar=false;
    this.itemProcurar=false;
  }

  apagarItem(){
    this.itemCriar=false;
    this.itemEditar=false;
    this.itemApagar=true;
    this.itensListar=false;
    this.itemProcurar=false;
  }

  listarItens(){
    this.itemCriar=false;
    this.itemEditar=false;
    this.itemApagar=false;
    this.itensListar=true;
    this.itemProcurar=false;
  }

  procurarItem(){
    this.itemCriar=false;
    this.itemEditar=false;
    this.itemApagar=false;
    this.itensListar=false;
    this.itemProcurar=true;
  }
  

}
