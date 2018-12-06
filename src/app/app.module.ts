import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemComponent } from './item/item.component';
import { EncomendaComponent } from './encomenda/encomenda.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http'
import	{	HttpHeaders }	from	'@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ItemComponent,
    EncomendaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
