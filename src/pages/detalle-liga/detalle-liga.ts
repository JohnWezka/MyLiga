import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Ligas {
  id: string;
  nombreLiga: string;
  nombreDueno: string;
  descripcion: string;
  foto: string;
}
@IonicPage()
@Component({
  selector: 'page-detalle-liga',
  templateUrl: 'detalle-liga.html',
})
export class DetalleLigaPage {

  ligaCollection : AngularFirestoreCollection<Ligas>;
  ligas : Observable<Ligas[]>;
  idLiga:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private angularFirestore: AngularFirestore) {
    this.idLiga = navParams.data;
    console.log(this.idLiga);
    this.ligaCollection = this.angularFirestore.collection('ligas');
    this.ligas = this.ligaCollection.valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLigaPage');
  }

}
