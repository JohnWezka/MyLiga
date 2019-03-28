import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-liga',
  templateUrl: 'detalle-liga.html',
})
export class DetalleLigaPage {

  liga: any = {};
  liga2: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    this.liga = navParams.data;
    this.liga2 = navParams.get('liga');
    console.log(this.liga);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLigaPage');
  }

}
