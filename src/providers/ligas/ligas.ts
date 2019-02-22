import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageReference, AngularFireStorageModule} from 'angularfire2/storage';


/*
  Generated class for the LigasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LigasProvider {

  constructor(public afDB: AngularFireDatabase,
    private angularFireStorage: AngularFireStorage,
    private angularFireStorageReference: AngularFireStorageReference,
    private angularFireStorageModule: AngularFireStorageModule) {
  }

  public getLigas() {
    return this.afDB.list('/ligas/');
  }

  /*public getLigas2() {
    var tabla = document.getElementById('tabla');
    tabla.innerHTML = '';
    this.angularFireStorage.collection("ligas");
    .onSnapshot((querySnapshot) => {
      tabla.innerHTML = '';
      querySnapshot.forEach((doc) => {

        tabla.innerHTML += `
        <tr>
          <th scope="row">${doc.id}</th>
          <td>${doc.data().nombreLiga}</td>
          <td>${doc.data().nombreDueno}</td>
          <td>${doc.data().descripcion}</td>
          <td><button class="btn btn-warning" id="boton" onclick="actualizarLiga('${doc.id}','${doc.data().nombreLiga}',
          '${doc.data().nombreDueno}','${doc.data().descripcion}')">Editar</button></td>
          <td><button class="btn red accent-4" id="boton" onclick="eliminarLiga('${doc.id}')">Eliminar</button></td>
        </tr>
        `;
      });
    });
  }*/

  public getLiga(id) {
    return this.afDB.object('/ligas/' + id);
  }

}
