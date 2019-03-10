import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';
import { LigasProvider } from '../../providers/ligas/ligas';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Ligas {
  nombreLiga: string;
  nombreDueno: string;
  descripcion: string;
  foto: string;
}

/**
 * Generated class for the ElegirLigaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elegir-liga',
  templateUrl: 'elegir-liga.html',
})
export class ElegirLigaPage {

  ligaCollection: AngularFirestoreCollection<Ligas>;
  ligas: Observable<Ligas[]>;

  ligasArray: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private ligasProvider: LigasProvider,
    private angularFirestore: AngularFirestore) {
      this.ligaCollection = this.angularFirestore.collection()
      this.ligasProvider.getLigas().subscribe((ligas) => {
      //this.ligas = ligas;
      /*/ligas.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ligas = ligas;
      });*/
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElegirLigaPage');
  }

  public irHome() {
    this.navCtrl.setRoot(TabPage);
  }

}
