import { Component } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public products: ProductsService, private cartService: CartService) {}

  addToCart(item) {
    item.inCart = true;
    this.cartService.addItem(item);
  }

  removeFromCart(item) {
    item.inCart = false;
    this.cartService.removeItem(item);
  }
}
