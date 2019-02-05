import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';
import { EquipoPrincipalPage } from '../equipo-principal/equipo-principal';

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

  public toJugadores(){
    this.navCtrl.push(JugadoresPage);
  }

  public toEquipo(){
    this.navCtrl.push(EquipoPrincipalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
