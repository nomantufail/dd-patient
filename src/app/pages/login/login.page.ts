import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  wait = false;
  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      subHeader: 'Invalid data.',
      message: 'Please provide valid data for each field.',
      buttons: ['OK']
    });

    await alert.present();
  }

  login(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.presentAlert();
    } else {
      this.wait = true;
      localStorage.setItem(loginForm.value.phone, JSON.stringify(loginForm.value));
      setTimeout(async () => {
        this.wait = false;
        this.router.navigate(['welcome']);
      }, 1000);
    }
  }

}
