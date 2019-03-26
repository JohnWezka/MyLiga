import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the JugadoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JugadoresProvider {

  constructor(private fireStore: AngularFirestore) {
    console.log('Hello JugadoresProvider Provider');
  }

  public getJugadores() {
    return this.fireStore.collection("jugadores").get();
  }

  public getJugador(id) {
    return this.fireStore.collection("jugadores").get(id);
  }

}
