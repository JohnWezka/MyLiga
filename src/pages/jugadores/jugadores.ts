import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
=======
import { JugadorInfoPage } from '../jugador-info/jugador-info';
>>>>>>> e580e125cf157abb039d92fa255adb50a8ffafc4

/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

<<<<<<< HEAD
=======
  public toInfo(){
    this.navCtrl.push(JugadorInfoPage);
  }

>>>>>>> e580e125cf157abb039d92fa255adb50a8ffafc4
  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

}
