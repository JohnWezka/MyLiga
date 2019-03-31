import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormularioMPage } from '../formulario-m/formulario-m'
import { MarcadorProvider } from '../../providers/marcador/marcador'
/**
 * Generated class for the FormularioMarcadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario-marcador',
  templateUrl: 'formulario-marcador.html',
})
export class FormularioMarcadorPage {

  partidos: any = [];
  Partido = null;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marcadorProvider: MarcadorProvider) {

    this.marcadorProvider.getPartidos().valueChanges().subscribe((Partido) => {
      this.partidos = Partido;
      console.log(Partido);
    })
  }

  public addMarcador() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioMarcadorPage');
  }


  /*public formularioMarcador(){
    if (!this.partidos.id) {
      this.marcadorProvider.createMarcador(this.partidos)
    }
    this.navCtrl.push(FormularioMPage);
  }*/

  irAFormulario(partido) {
    this.navCtrl.push(FormularioMPage, { Partido: partido.id });
  }

}
