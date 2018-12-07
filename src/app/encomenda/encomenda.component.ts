import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute,
    private encomendaService: EncomendaService,
    private location: Location) {    
  }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  save(produto): void {
    
  }
}
