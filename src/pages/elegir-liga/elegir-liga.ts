import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';

/**
 * Generated class for the ElegirLigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elegir-liga',
  templateUrl: 'elegir-liga.html',
})
export class ElegirLigaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElegirLigaPage');
  }

  public irHome() {
    this.navCtrl.setRoot(TabPage);
  }

}
