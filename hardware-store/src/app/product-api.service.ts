import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './model/product';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private dataUrl = 'http://localhost:3000/products';
  productsCollection: AngularFirestoreCollection<IProduct>;
  products: Observable<IProduct[]>;
  allProducts: IProduct[];

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.productsCollection = _afs.collection<IProduct>('products');
  }

  getAllProducts(): Observable<IProduct[]> {
    this.products = this.productsCollection.valueChanges();
    this.products.subscribe(data => console.log(data), catchError(this.handleError));
    return this.products;
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getAllProducts().pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
  }

  addProduct(product: IProduct): void {
    this.productsCollection.add(product);
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
