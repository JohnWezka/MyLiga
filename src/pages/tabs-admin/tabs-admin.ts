import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';
import { EquiposAdminPage } from '../equipos-admin/equipos-admin';
import { TabaPartidosAdminPage } from '../taba-partidos-admin/taba-partidos-admin'

/**
 * Generated class for the TabsAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs-admin',
  templateUrl: 'tabs-admin.html',
})
export class TabsAdminPage {

  tab1 = AdministradorPage;
  tab2 = EquiposAdminPage;
  tab3 = TabaPartidosAdminPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsAdminPage');
  }

}
