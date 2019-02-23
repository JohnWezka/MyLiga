import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcadorPage } from '../marcador/marcador';

/**
 * Generated class for the TablaPartidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabla-partidos',
  templateUrl: 'tabla-partidos.html',
})
export class TablaPartidosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablaPartidosPage');
  }

  public irMarcador() {
    this.navCtrl.push(MarcadorPage);
  }

}
