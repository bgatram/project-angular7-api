import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BusinessService } from '../api/business.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  private selectedCategory: number;
  categories: Category[];
  prodAddForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }
  createForm() {
    this.prodAddForm = this.fb.group({
      Name: ['', Validators.required],
      Description: [''],
      Url: ['']
    });
  }
  categoryValue($event) {
    this.selectedCategory = $event.target.value;
  }
  addProduct(Name, Description, Url) {
    const CategoryIds = [this.selectedCategory];
    this.bs.addProduct(Name, Description, Url, CategoryIds);
  }

  ngOnInit() {
    this.bs
      .getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

}
