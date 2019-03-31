import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcadorProvider } from '../../providers/marcador/marcador';

@IonicPage()
@Component({
  selector: 'page-detalle-liga',
  templateUrl: 'detalle-liga.html',
})
export class DetalleLigaPage {

  liga: any = {};
  //liga2: any = {};
  jugadores: any = 0;
  jugador: any;

  equipos: any = 0;
  equipo: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public marcadorProvider: MarcadorProvider) {
      this.liga = navParams.get('liga');
      this.marcadorProvider.getJugadores().valueChanges().subscribe((jugador) => {
        for (let i = 0; i < jugador.length - 1; i++) {
          this.jugador = jugador[i];
          //Filtrar a los jugadores
          if (this.jugador.idLiga == this.liga.userID) {
            this.jugadores ++;
          }
        }
    });
    this.marcadorProvider.getEquipos().valueChanges().subscribe((equipo) => {
      for (let i = 0; i < equipo.length - 1; i++) {
        this.equipo = equipo[i];
        //Filtrar a los jugadores
        if (this.equipo.idLiga == this.liga.userID) {
          this.equipos ++;
        }
      }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLigaPage');
  }

}
