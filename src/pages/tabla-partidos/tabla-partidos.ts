import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcadorPage } from '../marcador/marcador';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Partidos {
  id: string;
  fecha: string;
  hora: string;
  jornada: string;
  local: string;
  visitante: string;
  lugar: string;
  idLiga: string;
}
/**
 * Generated class for the TablaPartidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabla-partidos',
  templateUrl: 'tabla-partidos.html',
})
export class TablaPartidosPage {

  partidoCollection: AngularFirestoreCollection<Partidos>;
  partidos: Observable<Partidos[]>;

  liga: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
    this.liga = navParams.data;
    console.log(this.liga);
    this.partidoCollection = this.angularFirestore.collection('Partido');
    this.partidos = this.partidoCollection.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablaPartidosPage');
  }

  public irMarcador() {
    this.navCtrl.push(MarcadorPage);
  }

}
