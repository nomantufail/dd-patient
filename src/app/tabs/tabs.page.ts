import { Component } from '@angular/core';
import {CartService} from '../services/cart.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public cartService: CartService, public alertController: AlertController) {}

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Empty!',
            subHeader: 'No items.',
            message: 'No items in the cart.',
            buttons: ['OK']
        });

        await alert.present();
    }
  clicked() {
    if (!this.cartService.items.length) {
        this.presentAlert();
    }
  }

}
