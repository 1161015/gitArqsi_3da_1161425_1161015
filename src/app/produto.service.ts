import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Produto } from './produto/produto';
import { HttpInterceptor } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http'
import { CategoriaService } from './categoria.service';
import { MaterialService } from './material.service';
import { Material } from './material/material';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private produtosUrl = 'https://sicarqsi2018.azurewebsites.net/api/produto';  // URL to web api

  constructor(
    private http: HttpClient,
    private categoriaService: CategoriaService,
    private materialService: MaterialService
  ) { }

  /* getProdutoNo404<Data>(id: number): Observable<Produto> {
     const url = `${this.produtosUrl}/?id=${id}`;
     return this.http.get<Produto[]>(url)
       .pipe(
         map(produtos => produtos[0]), // returns a {0|1} element array
         tap(p => {
           const outcome = p ? `fetched` : `did not find`;
           this.log(`${outcome} hero id=${id}`);
         }),
         catchError(this.handleError<Hero>(`getHero id=${id}`))
       );
   }*/

  /** GET (id)**/
  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      catchError(this.handleError));
  }

  /** GET **/
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl).pipe(tap(produtos => {
      produtos.forEach(produtoAtual => {
        this.categoriaService.getCategoria(produtoAtual.categoriaID).subscribe(categoria => {
          produtoAtual.categoria.taxonomia = categoria.taxonomia;
          produtoAtual.categoria.id = categoria.id;
          produtoAtual.categoria.categoriaPaiID = categoria.categoriaPaiID;
        }),
        produtoAtual.materiais.forEach( material => 
          this.materialService.getMaterial(material.materialID).subscribe(material1 => {
            console.log(material1);
          let materialD = {descricao : material1.descricao};
          produtoAtual.material.push(materialD);
        }) 
      )
    })},
      catchError(this.handleError)
    ));
  }

  /** POST **/
  addProduto(produto: Produto): Observable<Produto> {
    console.log(produto);
    return this.http.post<Produto>(this.produtosUrl, produto, httpOptions).pipe(
      catchError(this.handleError));
  }

  /** DELETE **/
  deleteProduto(produto: Produto | number): Observable<Produto> { 
    const id = typeof produto === 'number' ? produto : produto.id;
    const url = `${this.produtosUrl}/${id}`;
    console.log(url);

    return this.http.delete<Produto>(url, httpOptions).pipe(
      catchError(this.handleError));
  }

  /** PUT **/
  updateProduto(produto: Produto | number): Observable<any> {
    const id = typeof produto === 'number' ? produto : produto.id;
    const url = `${this.produtosUrl}/${id}`;
    return this.http.put(url, produto, httpOptions).pipe(
      catchError(this.handleError));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error('An error occurred: ', err.error.message);
    }
    else {
      console.error(
        `Web Api returned code ${err.status}, ` + ` Response body was: ${err.error}`
      );
    }
    return Observable.throw(err);
  }

}
