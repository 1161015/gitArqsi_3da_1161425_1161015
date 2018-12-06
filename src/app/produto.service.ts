import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Produto } from './produto/produto';
import { HttpInterceptor } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private produtosUrl = 'https://sic20181111064858.azurewebsites.net/api/produto';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET (id)**/
  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }

  /** GET **/
  getProdutos (): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl)
      .pipe(
        catchError(this.handleError('getProdutos', []))
      );
  }

  /** POST **/
  addProduto (produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosUrl, produto, httpOptions).pipe(
      catchError(this.handleError<Produto>('addProduto'))
    );
  }

  /** DELETE **/
  deleteProduto (produto: Produto | number): Observable<Produto> {
    const id = typeof produto === 'number' ? produto : produto.id;
    const url = `${this.produtosUrl}/${id}`;

    return this.http.delete<Produto>(url, httpOptions).pipe(
      catchError(this.handleError<Produto>('deleteProduto'))
    );
  }
  
  /** PUT **/
  updateProduto (produto: Produto): Observable<any> {
    return this.http.put(this.produtosUrl, produto, httpOptions).pipe(
      catchError(this.handleError<any>('updateProduto'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 

      return of(result as T);
    };
  }

}
