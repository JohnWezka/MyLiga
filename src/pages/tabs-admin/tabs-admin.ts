import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdministradorPage } from '../administrador/administrador';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsAdminPage');
  }

}
