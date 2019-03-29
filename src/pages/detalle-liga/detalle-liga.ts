import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalle-liga',
  templateUrl: 'detalle-liga.html',
})
export class DetalleLigaPage {

  liga: any = {};
  //liga2: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
    //---
    if (navParams.get('liga')) {
      this.liga = navParams.get('liga');
      console.log(this.liga);
    } else {
      console.log("no jugador")
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLigaPage');
  }

}
