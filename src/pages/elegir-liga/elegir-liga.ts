import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPage } from '../tab/tab';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Ligas {
  userID: string;
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

  liga: any = {};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private angularFirestore: AngularFirestore) {
      /*/this.ligaCollection = this.angularFirestore.collection()
      this.ligasProvider.getLigas().subscribe((ligas) => {
      //this.ligas = ligas;
      //ligas.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.ligas = ligas;
      });
    });*/
    this.ligaCollection = this.angularFirestore.collection('ligas');
    this.ligas = this.ligaCollection.valueChanges();
    /*this.ligasProvider.getLigas().subscribe((ligas) => {
      //this.ligasArray = ligas;
      //console.log("array", this.ligasArray);
      //this.leerLigas();
      ligas.forEach((doc) => {

        this.ligasArray += doc;
        console.log("array", this.ligasArray);
        console.log("doc", doc);
        //console.log(`${doc.id} => ${doc.data()}`);
      });
    });*/
    if (navParams.get('seguir')) {
      this.liga = navParams.get('seguir');
      console.log(this.liga);
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElegirLigaPage');
  }

  /*public leerLigas() {
    var tabla = document.getElementById('lista');
    console.log(tabla);
    tabla.innerHTML = '';
    this.ligasArray.forEach((doc) => {

      tabla.innerHTML += `
        <ion-item class="item item-block item-md" onclick = "irHome('${doc.id}')" (click) = "irHome('${doc.id}')">
        <ion-avatar item-start>
          <img src="${doc.data().foto}">
        </ion-avatar>
        <div class="item-inner">
          <div class="input-wrapper">
            <ion-label class="label label-md">
              <h2>${doc.data().nombreLiga}</h2>
            </ion-label>
          </div>
        </div>
        </ion-item>
        `;
    });

  }*/

  public irHome(id) {
    console.log("home"+id);
    this.navCtrl.setRoot(TabPage, {idLiga: id});
  }

}
