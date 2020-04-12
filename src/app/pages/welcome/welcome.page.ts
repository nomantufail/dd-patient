import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {}

  async presentAlert(section) {
    const alert = await this.alertController.create({
      header: 'Under Development',
      message: section + ' area is under development',
      buttons: ['OK']
    });
    await alert.present();
  }

  underDelopment(section: string = 'this') {
    this.presentAlert(section);
  }

}
