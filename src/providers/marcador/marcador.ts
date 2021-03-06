import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class MarcadorProvider {
  idp: any = {};


  constructor(public afDB: AngularFirestore) {
  }

  public getPartidos() {
    return this.afDB.collection<any>('Partido');
  }

  public getPArtido(id) {
    return this.afDB.doc<any>('/Partido/' + id);

  }

  public getJugadores() {
    return this.afDB.collection<any>('jugadores');
    
  }

  public getJugador(id) {
    return this.afDB.doc<any>('/jugadores/' + id);

  }

  public getEquipos() {
    return this.afDB.collection<any>('equipos');
    
  }

  public getEquipo(id) {
    return this.afDB.doc<any>('/equipos/' + id);

  }


  equipolocal: any = {};
  equipovisitante: any = {};


  public createMarcador(id) {/*
    this.getPArtido(id).valueChanges().subscribe(partido => {
      this.idp = partido;
      this.equipolocal = partido.local;
      this.equipovisitante = partido.visitante;

      console.log("local->" + this.equipolocal);
      console.log("visit->" + this.equipovisitante);
    });
    var frankDocRef = this.afDB.collection("Partido").doc(id);

    frankDocRef.update({
      visitante: {
        asistencia: "",
        rebotesOfensivos: "",
        rebotesDefensivos: "",
        robos: "",
        tapones: "",
        perdidas: "",
        puntos: "",
        faltas: ""
      }

    }).then(function () {
      console.log("Document successfully updated!");
    });

*/




    /*this.afDB.collection("marcadores").add({

      equipoLocal: this.equipolocal,
      equipovisitante: this.equipovisitante

    }).then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      this.idMarcador = docRef.id;

    }).catch(function (error) {
      console.error("Error adding document: ", error);
    });*/

  }

  public editMarcador(marcador) {
    //return this.afDB.database.ref('/tablaMarcador/'+marcador).set(marcador);
  }
  public deteleLugar(marcador) {
    //return this.afDB.database.ref('/tablaMarcador/'+marcador.id).remove();
  }


}
