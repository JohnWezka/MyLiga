import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadorInfoPage } from '../jugador-info/jugador-info';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable, empty } from 'rxjs';
import { MarcadorProvider } from '../../providers/marcador/marcador';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { async } from 'rxjs/internal/scheduler/async';
import { c } from '@angular/core/src/render3';


/**
 * Generated class for the JugadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Jugador {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  numero: string;
  peso: string;
  estatura: string;
  curp: string;
  equipo: string;
  categoria: string;
  foto: string;
}

@IonicPage()
@Component({
  selector: 'page-jugadores',
  templateUrl: 'jugadores.html',
})
export class JugadoresPage {

  jugadorCollection: AngularFirestoreCollection<Jugador>;
  jugadores: Observable<Jugador[]>

  //jugadores: any = [];
  jugador: any = {};

  equipo: any = {};
  /*Equipo: any = {};

  id = null;

  Teams: any = [];
  tp:any=[];
  team: any={};*/

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore,
    public marcadorProvider: MarcadorProvider) {
    this.equipo = navParams.get('equipo');
    console.log(this.equipo);
    this.jugadorCollection = angularFirestore.collection('jugadores');
    this.jugadores = this.jugadorCollection.valueChanges();
    //Get-id-team
    /*const eEquipo = navParams.get('equipo');
    this.id = eEquipo;
    console.log("Equipo principal XX " + this.id);

    //Get-all-players
    this.marcadorProvider.getJugadores().valueChanges().subscribe((jugador) => {
      this.jugadores = jugador;
      
      for (let i = 0; i < this.jugadores.length; i++) {
        this.jugador = this.jugadores[i];

        //Filtrar a los jugadores
        if (this.jugador.equipo == this.id) {
          //this.Teams[i]=this.jugador;
          this.Teams[i] = this.jugador;
          console.log(this.Teams); 
        }
      }


  });*/


    /*for (let index = 0; index < this.jugadores.length; index++) {
      if (this.jugadores.equipo[index]==this.id) {
        this.team[index] = this.jugadores[index];
        console.log("Team number ZZz"+this.team[index]);
        
      } 
    }*/

  }

  public toInfo() {
    this.navCtrl.push(JugadorInfoPage);
  }

  detalleJugador(jugador) {
    this.navCtrl.push(JugadorInfoPage, { jugador: jugador.id });
    console.log("id jugador-p ->>" + jugador.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

  public jugadorInfo(jugador) {
    this.navCtrl.push(JugadorInfoPage, { jugador: jugador.id });
  }

}
