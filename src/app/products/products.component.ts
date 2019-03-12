import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { BusinessService } from '../api/business.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor( private bs: BusinessService) {
  }
  ngOnInit() {
    this.bs
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }
}
