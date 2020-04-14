import { Injectable } from '@angular/core';
import { Product } from './product';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Array<Product>;
  shoppingCart: Array<Product> = [];

  constructor() {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addToCart(item: Product) {
    this.shoppingCart.push(item);
  }
}
