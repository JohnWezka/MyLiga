import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
    this.idLiga = navParams.data;
    console.log(this.idLiga);
    this.ligaCollection = this.angularFirestore.collection('ligas');
    this.ligas = this.ligaCollection.valueChanges();
  }
  detallep() {
    this.navCtrl.push("DetalleLigaPage");
  }
}
