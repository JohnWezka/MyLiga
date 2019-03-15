import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';

/**
 * Generated class for the EquipoPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo-principal',
  templateUrl: 'equipo-principal.html',
})
export class EquipoPrincipalPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {

  }

  public toJugadores(){
    this.navCtrl.push(JugadoresPage, {equipo: });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPrincipalPage');
  }

}
