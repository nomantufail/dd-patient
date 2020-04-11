import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

  register(registerForm: NgForm) {
    if (!registerForm.valid) {
      this.presentAlert();
    } else {
      this.wait = true;
      localStorage.setItem(registerForm.value.phone, JSON.stringify(registerForm.value));
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2000);
    }
  }
}
