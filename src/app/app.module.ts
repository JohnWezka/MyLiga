import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroTorneoPage } from '../pages/registro-torneo/registro-torneo';
import { LoginPage } from '../pages/login/login';
import { TabPage } from '../pages/tab/tab';
import { EquiposPage } from '../pages/equipos/equipos';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { AdministradorPage } from '../pages/administrador/administrador';
import { EquipoPrincipalPage } from '../pages/equipo-principal/equipo-principal';
import { MarcadorPage } from '../pages/marcador/marcador';
import { TabsAdminPage } from '../pages/tabs-admin/tabs-admin';
import { EquiposAdminPage } from '../pages/equipos-admin/equipos-admin';
import { RegistroUsuariosPage } from '../pages/registro-usuarios/registro-usuarios';
import { ElegirLigaPage } from '../pages/elegir-liga/elegir-liga';
import { JugadorInfoPage } from '../pages/jugador-info/jugador-info';
import { TablaPartidosPage } from '../pages/tabla-partidos/tabla-partidos';
import { TablaDePuntosPage } from '../pages/tabla-de-puntos/tabla-de-puntos';
import { TabaPartidosAdminPage } from '../pages/taba-partidos-admin/taba-partidos-admin';
import { DetalleLigaPage } from '../pages/detalle-liga/detalle-liga';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule, AngularFireDatabase ,} from '@angular/fire/database';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LigasProvider } from '../providers/ligas/ligas';
import { MarcadorProvider } from '../providers/marcador/marcador';
import { FormularioMarcadorPage } from '../pages/formulario-marcador/formulario-marcador';
import { FormularioMPage } from '../pages/formulario-m/formulario-m';

import { JugadoresProvider } from '../providers/jugadores/jugadores';

export const firebaseConfig = {
  apiKey: "AIzaSyDu92rdtAJ-mOjDF2IoMua6gM5S_1RaMMU",
    authDomain: "myleague-a4d04.firebaseapp.com",
    databaseURL: "https://myleague-a4d04.firebaseio.com",
    projectId: "myleague-a4d04",
    storageBucket: "myleague-a4d04.appspot.com",
    messagingSenderId: "468908962623"

  //apiKey: "AIzaSyCrrASgB21Xwu1HKPkEMxyJRtSsrgGyr1g",
    //authDomain: "myleague-5a9c8.firebaseapp.com",
    //databaseURL: "https://myleague-5a9c8.firebaseio.com",
    //projectId: "myleague-5a9c8",
    //storageBucket: 'gs://myleague-5a9c8.appspot.com/',
    //messagingSenderId: "167455229801"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroTorneoPage,
    TabPage,
    EquiposPage,
    JugadoresPage,
    ConfiguracionPage,
    RegistrarsePage,
    EquipoPrincipalPage,
    AdministradorPage,
    MarcadorPage,
    TabsAdminPage,
    EquiposAdminPage,
    RegistroUsuariosPage,
    ElegirLigaPage,
    JugadorInfoPage,
    TablaPartidosPage,
    TablaDePuntosPage,
    TabaPartidosAdminPage,
    EquiposPage,
    FormularioMarcadorPage,
    FormularioMPage,
    DetalleLigaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroTorneoPage,
    TabPage,
    EquiposPage,
    JugadoresPage,
    ConfiguracionPage,
    RegistrarsePage,
    EquipoPrincipalPage,
    AdministradorPage,
    MarcadorPage,
    TabsAdminPage,
    EquiposAdminPage,
    RegistroUsuariosPage,
    ElegirLigaPage,
    JugadorInfoPage,
    TablaPartidosPage,
    TablaDePuntosPage,
    TabaPartidosAdminPage,
    EquiposPage,
    FormularioMarcadorPage,
    FormularioMPage,
    DetalleLigaPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    AngularFireDatabaseModule,
    LigasProvider,
    MarcadorProvider,
    AngularFirestoreModule,
    LigasProvider,
    JugadoresProvider
  ]
})
export class AppModule {}
