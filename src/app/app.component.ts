import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RegistroTorneoPage} from '../pages/registro-torneo/registro-torneo';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroJugadorPage } from '../pages/registro-jugador/registro-jugador';
import { TabPage } from '../pages/tab/tab';
import { JugadoresPage } from '../pages/jugadores/jugadores';
import { EquipoPrincipalPage } from '../pages/equipo-principal/equipo-principal';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { RegistroArbitrosPage } from '../pages/registro-arbitros/registro-arbitros';
<<<<<<< HEAD
import { RegistroLigaPage } from '../pages/registro-liga/registro-liga';

=======
import { AdministradorPage} from '../pages/administrador/administrador';
<<<<<<< HEAD
=======
>>>>>>> 968b1f2768722cf04312ae4273ef24596464d80e
>>>>>>> 8750fcf78f06b95ee381402fd24288c7034b514a
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
=======
<<<<<<< HEAD
//hola
<<<<<<< HEAD
  rootPage:any = RegistroLigaPage;
=======
  rootPage:any = AdministradorPage ;
=======
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f


  rootPage:any = HomePage;

<<<<<<< HEAD

=======
>>>>>>> b3b665bc3b83eb85155f54f1f8bd1df9f5d1807c
>>>>>>> 968b1f2768722cf04312ae4273ef24596464d80e
>>>>>>> 8750fcf78f06b95ee381402fd24288c7034b514a
>>>>>>> 9476dc05c4f29d1ce724e276578316a12721469f

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
