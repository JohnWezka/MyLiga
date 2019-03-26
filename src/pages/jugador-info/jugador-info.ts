import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the JugadorInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jugador-info',
  templateUrl: 'jugador-info.html',
})
export class JugadorInfoPage {

  jugador: any = {};

  age: any;

  fecha: any = new Date;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
    if (navParams.get('jugador')) {
      this.jugador = navParams.get('jugador');
      console.log(this.jugador);
    } else {
      console.log("no jugador")
    }
    this.edad();
    console.log(this.fecha.getFullYear());
    console.log(this.jugador.fechaNacimiento.substring(0, 4));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorInfoPage');
  }

  edad() {
    this.age = this.fecha.getFullYear() - this.jugador.fechaNacimiento.substring(0, 4);
    //console.log(Date.now());
    //this.age = ((this.fecha.toLocaleDateString() - this.jugador.fechaNacimiento || this.fecha.toLocaleDateString()) / (24 * 3600 * 365.25 * 1000));
  }

}
