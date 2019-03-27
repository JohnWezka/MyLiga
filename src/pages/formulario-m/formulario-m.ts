import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcadorProvider } from '../../providers/marcador/marcador';

/**
 * Generated class for the FormularioMPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario-m',
  templateUrl: 'formulario-m.html',
})
export class FormularioMPage {
  partido: any = {};
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public marcadorProvider:MarcadorProvider) {
      
    const idPartido=navParams.get('Partido');
    console.log(idPartido);
    
    this.marcadorProvider.getPArtido(idPartido)
    .valueChanges().subscribe(partido =>{
      this.partido=partido;
      
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioMPage');
  }

}
