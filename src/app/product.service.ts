import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product> = [];
  shoppingCart: Array<Product> = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addToCart(item) {
    this.shoppingCart.push(item);
  }
}
