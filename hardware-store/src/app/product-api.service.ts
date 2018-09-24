import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private dataUrl = "src/data/products.json";

  constructor(private _http: HttpClient) { }

  getAllProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.dataUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
  }

  getProductById(id: number): Observable<IProduct | undefined>{
    return this.getAllProducts().pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
  }
  
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
