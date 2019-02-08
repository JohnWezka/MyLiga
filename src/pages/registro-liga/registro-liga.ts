import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsAdminPage } from '../tabs-admin/tabs-admin';

/**
 * Generated class for the RegistroLigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-liga',
  templateUrl: 'registro-liga.html',
})
export class RegistroLigaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroLigaPage');
  }

  public irHomeAdmin(){
    this.navCtrl.setRoot(TabsAdminPage);
  }

}
