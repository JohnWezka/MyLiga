import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';

/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toJugadores(){
    this.navCtrl.push(JugadoresPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
