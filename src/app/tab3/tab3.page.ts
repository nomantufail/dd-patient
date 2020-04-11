import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    totalAmount = 0;
  constructor(public cartService: CartService) {}

  ngOnInit() {
      this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = 0;
    this.cartService.items.forEach((item) => {
      this.totalAmount += item.price * item.qty;
    });
  }

  remove(item: any) {
    this.cartService.removeItem(item);
  }

  checkout() {

  }
}
