import { Component, OnInit } from '@angular/core';
import { Encomenda } from './encomenda';
import {FormControl} from '@angular/forms';
import { EncomendaService } from '../encomenda.service';

@Component({
  selector: 'app-encomenda',
  templateUrl: './encomenda.component.html',
  styleUrls: ['./encomenda.component.css']
})
export class EncomendaComponent implements OnInit {
  itens = new FormControl();
  encomendas: Encomenda[];
  constructor() { }

  ngOnInit() {
  }

}
