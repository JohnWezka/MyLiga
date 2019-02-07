import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ElegirLigaPage } from '../elegir-liga/elegir-liga';

/**
 * Generated class for the RegistroUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-usuarios',
  templateUrl: 'registro-usuarios.html',
})
export class RegistroUsuariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroUsuariosPage');
  }

  public irLogin(){
    this.navCtrl.push(LoginPage);
    console.log("login");
  }

  public elegirLiga(){
    this.navCtrl.push(ElegirLigaPage);
  }

}
