import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the LigasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LigasProvider {

  constructor(public afDB: AngularFireDatabase ,
    private fireStore: AngularFirestore,
    public afAuth: AngularFireAuth) {
  }

  public getLigas() {
    return this.fireStore.collection("ligas").get();
  }

  public getLiga(id) {
    return this.fireStore.collection("ligas").doc(id);
  }

  public loing(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      console.log("then");
    }).catch((error) => {
      console.log(error);
      console.log("error");
    });
  }


}
