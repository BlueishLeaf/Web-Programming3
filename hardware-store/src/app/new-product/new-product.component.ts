import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProduct } from '../model/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  product: IProduct
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.product = form.value as IProduct
    console.log(this.product)
  }

}
