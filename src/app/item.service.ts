import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item/item';
import { HttpInterceptor } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http'
import { ProdutoService } from './produto.service';
import { MaterialService } from './material.service';
import { AcabamentoService } from './acabamento.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itensUrl = 'http://localhost:8080/item';  // URL to web api

  constructor(
    private http: HttpClient,
    private produtoService: ProdutoService,
    private materialService: MaterialService,
    private acabamentoService: AcabamentoService
  ) { }

  /** GET (id)**/
  getItem(id: number): Observable<Item> {
    const url = `${this.itensUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError)
    );
     
  }

  /** GET **/
  getItens (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itensUrl)
    .pipe(tap(itens => {
      itens.forEach(itemAtual => {
        this.materialService.getMaterial(itemAtual.idMaterial).subscribe(material => {
          itemAtual.nomeMaterial = material.descricao;
        });
        this.acabamentoService.getAcabamento(itemAtual.idAcabamento).subscribe(acabamento => {
          itemAtual.nomeAcabamento = acabamento.descricao;
        });
        this.produtoService.getProduto(itemAtual.idProduto).subscribe(produto => {
          itemAtual.nomeProduto = produto.nome;
        })
      });
    },
      catchError(this.handleError)));
  }

  /** POST **/
  addItens (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itensUrl, item, httpOptions).pipe(
      catchError(this.handleError));
  }

  /** DELETE **/
  deleteItem (item : Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item._id;
    console.log(id);
    const url = `${this.itensUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      catchError(this.handleError));
  }
  
  /** PUT **/
  updateItem (item: Item): Observable<any> {
    const id = typeof item === 'number' ? item : item._id;
    const url = `${this.itensUrl}/${id}`;
    console.log(url);
    return this.http.put(url, item, httpOptions).pipe(
      catchError(this.handleError));
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
