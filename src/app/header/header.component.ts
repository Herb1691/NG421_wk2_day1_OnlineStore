import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService: ProductService) { }

  shoppingCart: Array<Product>;

  ngOnInit() {
    this.shoppingCart = this.productService.getShoppingCart();
  }

}
