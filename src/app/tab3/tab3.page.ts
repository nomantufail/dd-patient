import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {ProductsService} from '../services/products.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    totalAmount = 0;
  constructor(
      public cartService: CartService,
      public productService: ProductsService,
      public alertController: AlertController
  ) {}

  ngOnInit() {
      this.calculateTotal();
  }

    async presentAlert(options) {
        const alert = await this.alertController.create(options);
        await alert.present();
    }

  calculateTotal() {
    this.totalAmount = 0;
    this.cartService.items.forEach((item) => {
      this.totalAmount += item.price * item.qty;
    });
  }

  remove(item: any) {
    this.presentAlert({
        header: 'Confirm!',
        message: 'Are you sure!',
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
                handler: (blah) => {}
            }, {
                text: 'Remove',
                handler: () => {
                    this.cartService.removeItem(item);
                }
            }
        ]
    });
  }

  checkout() {
      this.productService.products.forEach((product) => {
        product.inCart = false;
      });
      this.cartService.items = [];
      this.cartService.checkedOut = true;
  }
}
