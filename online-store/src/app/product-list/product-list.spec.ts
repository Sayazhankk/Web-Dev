import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule, DecimalPipe } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [ CommonModule ],
      providers: [ ProductService, DecimalPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});