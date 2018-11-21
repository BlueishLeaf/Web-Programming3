import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from '../model/product';
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
    this.products = this.productsCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as IProduct;
      const id = a.payload.doc.id;
      return {id, ...data};
    })));
    return this.products;
  }

  getProductById(id: number): Observable<IProduct | undefined> {
    return this.getAllProducts().pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
  }

  addProduct(product: IProduct): void {
    this.productsCollection.add(product);
  }

  deleteProduct(Id: string): void {
    this.productsCollection.doc(Id).delete();
  }
}
