import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { EquiposPage } from '../equipos/equipos';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { TablaPartidosPage } from '../tabla-partidos/tabla-partidos';

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
  tab3 = TablaPartidosPage;
  tab4 = ConfiguracionPage;

  idLiga: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    this.idLiga = navParams.get('idLiga');
    console.log("menu "+this.idLiga);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

  ionViewDidEnter(){
 
    this.idLiga = this.navParams.data.idLiga;
    console.log(this.idLiga);
  }
  
}
