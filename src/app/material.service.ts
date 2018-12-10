import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Material } from './material/material';
import { HttpInterceptor } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class MaterialService {

  private materiaisUrl = 'https://sicarqsi2018.azurewebsites.net/api/material';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /** GET (id)**/
  getMaterial(id: number): Observable<Material> {
    const url = `${this.materiaisUrl}/${id}`;
    return this.http.get<Material>(url).pipe(
      catchError(this.handleError));
  }

  /** GET **/
  getMateriais(): Observable<Material[]> {
    return this.http.get<Material[]>(this.materiaisUrl).pipe(
      catchError(this.handleError)
    );;
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
