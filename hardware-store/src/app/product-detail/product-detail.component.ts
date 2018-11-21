import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductApiService) {
  }

  // Fetch ID from route
  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  // Fetch individual product
  getProduct(id: number) {
    this.productService.getProductById(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
