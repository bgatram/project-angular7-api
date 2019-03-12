import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../api/business.service';
import {Category} from '../models/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: any = {};
  categories: Category[];
  prodEditForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: BusinessService,
    private fb: FormBuilder) {
    this.createEditForm();
  }
  createEditForm() {
    this.prodEditForm = this.fb.group({
      Name: ['', Validators.required],
      Description: [''],
      Url: ['']
    });
  }

  ngOnInit() {
    this.bs
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
    this.route.params.subscribe(params => {
      this.bs.editProduct(params['id']).subscribe(res => {
        this.product = res;
      });
    });
  }

  updateProduct(ProductId, Name, Description, Url, Categories) {
    this.route.params.subscribe(params => {
      this.bs.updateProduct(ProductId, Name, Description, Url, Categories);
      this.router.navigate(['products']);
    });
    // this.bs.updateProduct(ProductId, Name, Description, Url, Categories);
  }
}
