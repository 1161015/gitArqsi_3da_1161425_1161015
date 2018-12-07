import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent }   from './produto/produto.component';
import { ItemComponent }   from './item/item.component';
import { EncomendaComponent }   from './encomenda/encomenda.component';

const routes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'item', component: ItemComponent },
  { path: 'encomenda', component: EncomendaComponent}, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
