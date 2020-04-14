import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  @Output() productAdded: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  AddToCart(): void {
    this.productAdded.emit(this.product);
  }

}
