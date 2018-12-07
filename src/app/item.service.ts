import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Item } from './item/item';
import { HttpInterceptor } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itensUrl = '';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET (id)**/
  getItem(id: number): Observable<Item> {
    const url = `${this.itensUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError<Item>('getItem id=${id}'))
    );
  }

  /** GET **/
  getItens (): Observable<Item[]> {
    return this.http.get<Item[]>(this.itensUrl)
      .pipe(
        catchError(this.handleError('getItens', []))
      );
  }

  /** POST **/
  addItens (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itensUrl, item, httpOptions).pipe(
      catchError(this.handleError<Item>('addItens'))
    );
  }

  /** DELETE **/
  deleteItem (item : Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itensUrl}/${id}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      catchError(this.handleError<Item>('deleteItem'))
    );
  }
  
  /** PUT **/
  updateItem (item: Item): Observable<any> {
    return this.http.put(this.itensUrl, item, httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
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
