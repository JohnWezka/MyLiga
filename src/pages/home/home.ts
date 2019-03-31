import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { DetalleLigaPage } from '../detalle-liga/detalle-liga';
import { MarcadorProvider } from '../../providers/marcador/marcador';
import { JugadorInfoPage } from '../jugador-info/jugador-info';
import { EquipoPrincipalPage } from '../equipo-principal/equipo-principal';

interface Ligas {
  id: string;
  nombreLiga: string;
  nombreDueno: string;
  descripcion: string;
  foto: string;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ligaCollection: AngularFirestoreCollection<Ligas>;
  ligas: Observable<Ligas[]>;
  idLiga: any;

  //JW
  jugadores: any = [];
  jugadores1: any = [{}];
  jugador = null;

  equipos: any = [];
  equipos1: any = [];
  equipo = null;

  Requipos:any=[];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore,
    public marcadorProvider: MarcadorProvider) {

    //JW-->Jugadores-Card
    this.marcadorProvider.getJugadores().valueChanges().subscribe((jugador) => {
      this.jugadores = jugador;

      for (let i = 0; i < 5; i++) {
        this.jugadores1[i] = this.jugadores[i];
      }
    })
    //<--

    //JW-->Equipos-Card
    this.marcadorProvider.getEquipos().valueChanges().subscribe((equipo) => {
      this.equipos = equipo;

      for (let i = 0; i < 5; i++) {
        this.equipos1[i] = this.equipos[i];
      }
    })
    //<--



    this.idLiga = navParams.data;
    console.log("id liga " + this.idLiga);
    this.ligaCollection = this.angularFirestore.collection('ligas');
    this.ligas = this.ligaCollection.valueChanges();
  }


  detalleJugador(jugador){
    this.navCtrl.push(JugadorInfoPage, { jugador: jugador.id });
    console.log("id jugador-p ->>"+jugador.id);
  }
  
  
  detalleEquipo(equipo){
    this.navCtrl.push(EquipoPrincipalPage, { equipo: equipo.idEquipo });
    console.log("id equipo-Home ->>"+equipo.idEquipo);
  }

  detallep(liga) {
    this.navCtrl.push(DetalleLigaPage, { liga: liga });
  }

}
