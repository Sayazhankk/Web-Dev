import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() categoryId: number | null = null;
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