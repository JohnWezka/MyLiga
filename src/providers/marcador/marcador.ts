import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class MarcadorProvider {

  constructor(public afDB: AngularFirestore ) {
  }

  public getPartidos(){
    return this.afDB.collection<any>('Partido');
  }

  public getPArtido(id){
    return this.afDB.doc<any>('/Partido/'+id);
    
  }
  public createMarcador(id){
    //return this.afDB.database.ref('/tablaMarcador'+marcador.id).set(marcador);
    
  }

  public editMarcador(marcador){
    //return this.afDB.database.ref('/tablaMarcador/'+marcador).set(marcador);
  }
  public deteleLugar(marcador){
    //return this.afDB.database.ref('/tablaMarcador/'+marcador.id).remove();
  }

  
}
