import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EquiposPage } from '../equipos/equipos';
<<<<<<< HEAD
=======
import { ConfiguracionPage } from '../configuracion/configuracion';
>>>>>>> e580e125cf157abb039d92fa255adb50a8ffafc4
/**
 * Generated class for the TabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  tab1 = HomePage;
  tab2 = EquiposPage;
<<<<<<< HEAD
=======
  tab3 = ConfiguracionPage;
>>>>>>> e580e125cf157abb039d92fa255adb50a8ffafc4


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
