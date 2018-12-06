import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent }   from './produto/produto.component';
import { ItemComponent }   from './item/item.component';

const routes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'item', component: ItemComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
