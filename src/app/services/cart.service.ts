import { Injectable } from '@angular/core';
import {ProductsService} from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  checkedOut = false;
  items: any[] = [];
  constructor(private productsService: ProductsService) { }

  addItem(item: any) {
    this.checkedOut = false;
    item.qty = 1;
    this.items.push(item);
  }

  removeItem(item: any) {
    this.items = this.items.filter(existingItem => existingItem.id !== item.id);
    this.productsService.products = this.productsService.products.map(product => {
      if (product.id === item.id) {
        product.inCart = false;
      }
      return product;
    });
  }
}
