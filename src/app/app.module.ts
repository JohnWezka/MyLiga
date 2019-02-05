import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroTorneoPage } from '../pages/registro-torneo/registro-torneo';
import { LoginPage } from '../pages/login/login';
import { RegistroJugadorPage } from '../pages/registro-jugador/registro-jugador';
import { TabPage } from '../pages/tab/tab';
import { EquiposPage } from '../pages/equipos/equipos';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { RegistroArbitrosPage } from '../pages/registro-arbitros/registro-arbitros';
<<<<<<< HEAD
import { AdministradorPage } from '../pages/administrador/administrador';
=======
<<<<<<< HEAD
import { RegistroLigaPage } from '../pages/registro-liga/registro-liga';
=======
<<<<<<< HEAD
import { EquipoPrincipalPage } from '../pages/equipo-principal/equipo-principal';
=======
import { AdministradorPage } from '../pages/administrador/administrador';
>>>>>>> 968b1f2768722cf04312ae4273ef24596464d80e
>>>>>>> 8750fcf78f06b95ee381402fd24288c7034b514a
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroJugadorPage,
    RegistroTorneoPage,
    TabPage,
    EquiposPage,
    JugadoresPage,
    ConfiguracionPage,
    RegistrarsePage,
    RegistroArbitrosPage,
<<<<<<< HEAD
    AdministradorPage
=======
<<<<<<< HEAD
    RegistroLigaPage
=======
<<<<<<< HEAD
    EquipoPrincipalPage
=======
    AdministradorPage
>>>>>>> 968b1f2768722cf04312ae4273ef24596464d80e
>>>>>>> 8750fcf78f06b95ee381402fd24288c7034b514a
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistroJugadorPage,
    RegistroTorneoPage,
    TabPage,
    EquiposPage,
    JugadoresPage,
    ConfiguracionPage,
    RegistrarsePage,
    RegistroArbitrosPage,
<<<<<<< HEAD
    AdministradorPage
=======
<<<<<<< HEAD
    RegistroLigaPage
=======
<<<<<<< HEAD
    EquipoPrincipalPage
=======
    AdministradorPage
>>>>>>> 968b1f2768722cf04312ae4273ef24596464d80e
>>>>>>> 8750fcf78f06b95ee381402fd24288c7034b514a
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
