import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  liga: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private tabPage: TabPage) {
    this.liga = navParams.data;
    console.log(this.liga);
  }

}
