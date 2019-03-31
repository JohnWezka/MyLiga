import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcadorProvider } from '../../providers/marcador/marcador'

/**
 * Generated class for the MarcadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marcador',
  templateUrl: 'marcador.html',
})
export class MarcadorPage {

  partidos: any = {};
  partido: any = {};

  Equipo: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marcadorProvider: MarcadorProvider) {
       //JW -->
    const idPartido = navParams.get('partido');
    console.log("Id recivido nvctrl ZZZ"+idPartido);

    //Recibimos id para poder buscar un equipo en especifico
    this.marcadorProvider.getPArtido(idPartido)
      .valueChanges().subscribe(equipo => {
        this.Equipo = equipo;

      });


    //JW<--
    /*if (navParams.get('partido')) {
      this.partido = navParams.get('partido');
    this.marcadorProvider.createMarcador(this.partido.id);
    } else {
      console.log('no hay partido');
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarcadorPage');
  }

}
