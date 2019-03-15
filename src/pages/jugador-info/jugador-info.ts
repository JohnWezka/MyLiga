import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/**
 * Generated class for the JugadorInfoPage page.
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
  selector: 'page-jugador-info',
  templateUrl: 'jugador-info.html',
})
export class JugadorInfoPage {

  jugadorCollection: AngularFirestoreCollection<Jugador>;
  jugadores: Observable<Jugador[]>

  jugador: any = {};

  age: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
      this.jugadorCollection = angularFirestore.collection('jugadores');
      this.jugadores = this.jugadorCollection.valueChanges();

      if (navParams.get('jugador')) {
        this.jugador = navParams.get('jugador');
        console.log(this.jugador.fechaNacimiento);
      } else {
        console.log("no jugador")
      }
this.edad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JugadorInfoPage');
  }
   edad(){
    this.age=((Date.now() - this.jugador.fechaNacimiento || Date.now()) / (24 * 3600 * 365.25 * 1000));
  }

}
