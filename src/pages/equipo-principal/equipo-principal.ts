import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadoresPage } from '../jugadores/jugadores';
import { MarcadorProvider } from '../../providers/marcador/marcador';

/**
 * Generated class for the EquipoPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipo-principal',
  templateUrl: 'equipo-principal.html',
})
export class EquipoPrincipalPage {

  equipo: any = {};
  Equipo: any = {};
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marcadorProvider: MarcadorProvider) {
    //JW -->
    const idEquipo = navParams.get('equipo');
    //Recibimos id para poder buscar un equipo en especifico
    this.marcadorProvider.getEquipo(idEquipo)
      .valueChanges().subscribe(equipo => {
        this.Equipo = equipo;

      });
    //JW<--



    /*if (navParams.get('equipo')) {
      this.equipo = navParams.get('equipo');
      console.log(this.equipo);
    } else {
      console.log("no jugador")
    }*/
  }

  public toJugadores() {
    console.log("Equipo principal XX "+this.Equipo.idEquipo);
    this.navCtrl.push(JugadoresPage, { equipo: this.Equipo.idEquipo});
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipoPrincipalPage');
  }

}
