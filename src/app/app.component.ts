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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

<<<<<<< HEAD
  rootPage:any = ConfiguracionPage;
=======
<<<<<<< HEAD
  rootPage:any = LoginPage;
=======
  rootPage:any = RegistroTorneoPage;
>>>>>>> 1c87181e86ed62a7aa5719f3fd0fd14dc22fb5cb
>>>>>>> 58363cb5208d9c59e856ded7162c03b1cdb4389f

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

