import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  liga: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    if (navParams.get('id')) {
      this.liga = navParams.get('id');
      console.log('id' , this.liga);
    } else {
      console.log('no id');
    }
  }

}
