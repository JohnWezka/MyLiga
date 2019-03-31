import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, NavPush } from 'ionic-angular';
import { EquipoPrincipalPage } from '../equipo-principal/equipo-principal';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/**
 * Generated class for the EquiposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Equipo {
  nombreEquipo: string;
  nombreEntrenador: string;
  nombreCategoria: string;
  nombreAsistente: string;
  idEquipo: string;
  descripcion: string;
  foto: string;
}

@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {

  equipoCollection: AngularFirestoreCollection<Equipo>;
  equipos: Observable<Equipo[]>

  liga: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
    this.liga = navParams.data;
    console.log(this.liga);
    this.equipoCollection = angularFirestore.collection('equipos');
    this.equipos = this.equipoCollection.valueChanges();
  }

  public toEquipo(equipo) {
    console.log(equipo);
    this.navCtrl.push(EquipoPrincipalPage, {equipo: equipo.idEquipo});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquiposPage');
  }

}
