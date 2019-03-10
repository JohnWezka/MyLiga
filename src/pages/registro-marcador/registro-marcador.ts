import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the RegistroMarcadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-marcador',
  templateUrl: 'registro-marcador.html',
})
export class RegistroMarcadorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroMarcadorPage');
  }

}
