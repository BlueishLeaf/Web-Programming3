import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from '../model/product';
import { ProductApiService } from '../product-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  product: IProduct;

  constructor(private _productService: ProductApiService) { }

  submitProduct(data): void {
    this.product = data as IProduct;
    this._productService.addProduct(this.product);
   }

}
