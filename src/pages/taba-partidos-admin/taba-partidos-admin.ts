import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroPartidosPage } from '../registro-partidos/registro-partidos';

/**
 * Generated class for the TabaPartidosAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taba-partidos-admin',
  templateUrl: 'taba-partidos-admin.html',
})
export class TabaPartidosAdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  registroPartido(){
    this.navCtrl.push(RegistroPartidosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabaPartidosAdminPage');
  }

}
