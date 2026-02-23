import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }
  shareWhatsApp() {
  window.open(`https://wa.me/?text=${this.product.link}`);
}

shareTelegram() {
  window.open(`https://t.me/share/url?url=${this.product.link}`);
}
}
