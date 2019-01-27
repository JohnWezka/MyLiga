import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registro-torneo',
  templateUrl: 'registro-torneo.html',
})
export class RegistroTorneoPage {

  constructor(public menuCtrl: MenuController,public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenu() {
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroTorneoPage');
  }

}
