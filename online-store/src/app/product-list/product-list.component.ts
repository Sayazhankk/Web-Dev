import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() categoryId: number | null = null;  // таңдаулы категория
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.products;
    this.filterProducts();
  }

  selectCategory(categoryId: number | null) {
    this.categoryId = categoryId;
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts =
      this.categoryId === null
        ? this.products
        : this.products.filter(p => p.categoryId === this.categoryId);
  }
}