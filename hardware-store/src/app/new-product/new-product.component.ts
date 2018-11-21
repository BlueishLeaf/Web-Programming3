import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  showDisplayClipartComponent: boolean;

  constructor(private _productService: ProductApiService) { }

  showHideDisplayClipartComponent(): boolean {
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
    return false;
  }

  addImageStringToFormTextBox(event): boolean {
    this.imageUrl = event;
    return false;
  }

  submitProduct(): void {
    const product: IProduct = {
      productId: this.productId,
      productName: this.productName,
      productCode: this.productCode,
      releaseDate: this.releaseDate,
      description: this.description,
      price: this.price,
      starRating: this.starRating,
      imageUrl: this.imageUrl
    };
    this._productService.addProduct(product);
   }

}
