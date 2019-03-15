import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  liga: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    this.liga = navParams.data;
    console.log(this.liga);
  }

  login() {
    this.navCtrl.push(LoginPage, { liga: this.liga });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

}
