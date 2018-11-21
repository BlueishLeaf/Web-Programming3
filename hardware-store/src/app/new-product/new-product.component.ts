import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ProductApiService } from '../services/product-api.service';
import { Router } from '@angular/router';

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

  constructor(private _productService: ProductApiService, private _router: Router) { }

  // Toggle clipart component
  showHideDisplayClipartComponent(): boolean {
    this.showDisplayClipartComponent = !this.showDisplayClipartComponent;
    return false;
  }

  // Assign string from event to imageUrl
  addImageStringToFormTextBox(event): boolean {
    this.imageUrl = event;
    return false;
  }

  // Submit form
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
    // Redirect to products page
    this._router.navigate(['/products']);
   }

}
