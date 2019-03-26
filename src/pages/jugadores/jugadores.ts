import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JugadorInfoPage } from '../jugador-info/jugador-info';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { JugadoresProvider } from '../../providers/jugadores/jugadores';


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

  jugador: any = {};
  equipo: any = {};

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private angularFirestore: AngularFirestore,
    private jugadoresProvider: JugadoresProvider) {
    this.jugadorCollection = angularFirestore.collection('jugadores');
    this.jugadores = this.jugadorCollection.valueChanges();
    console.log(this.jugadores);
    /*this.jugadoresProvider.getJugadores().subscribe((jugadores) => {
      console.log(jugadores);
      //this.ligasArray = ligas;
      //console.log("array", this.ligasArray);
      //this.leerLigas();
      /*ligas.forEach((doc) => {

        this.ligasArray += doc;
        console.log("array", this.ligasArray);
        console.log("doc", doc);
        //console.log(`${doc.id} => ${doc.data()}`);
      });
    });*/
    if (navParams.get('equipo')) {
      this.equipo = navParams.get('equipo');
      console.log(this.equipo);
    } else {
      console.log("no jugador")
    }
  }

  public toInfo(){
    this.navCtrl.push(JugadorInfoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadoresPage');
  }

  public jugadorInfo(jugador) {
    this.navCtrl.push(JugadorInfoPage, { jugador: jugador });
  }

}
