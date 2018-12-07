import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Produto } from './produto/produto';
import { HttpInterceptor } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private produtosUrl = 'https://sicarqsi2018.azurewebsites.net/api/produto';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET (id)**/
  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.http.get<Produto>(url);
  }

  /** GET **/
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl);
  }

  /** POST **/
  addProduto (produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosUrl, produto, httpOptions);
  }

  /** DELETE **/
  deleteProduto (produto: Produto | number): Observable<Produto> {
    const id = typeof produto === 'number' ? produto : produto.id;
    const url = `${this.produtosUrl}/${id}`;

    return this.http.delete<Produto>(url, httpOptions);
  }
  
  /** PUT **/
  updateProduto (produto: Produto): Observable<any> {
    return this.http.put(this.produtosUrl, produto, httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError(err : HttpErrorResponse) {
    if(err.error instanceof ErrorEvent){
    console.error('An error occurred: ', err.error.message);
    }
    else{
    console.error(
    `Web Api returned code ${err.status}, ` + ` Response body was: ${err.error}`
    );
    }
    return Observable.throw(err);
    }

}
