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
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { RegistroArbitrosPage } from '../pages/registro-arbitros/registro-arbitros';
import { AdministradorPage} from '../pages/administrador/administrador';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
//hola
  rootPage:any = AdministradorPage ;
=======

  rootPage:any = HomePage;

>>>>>>> b3b665bc3b83eb85155f54f1f8bd1df9f5d1807c

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
