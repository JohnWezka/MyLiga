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
import { RegistroLigaPage } from '../pages/registro-liga/registro-liga';
import { AdministradorPage} from '../pages/administrador/administrador';
import { RegistroUsuariosPage } from '../pages/registro-usuarios/registro-usuarios';
import { ElegirLigaPage } from '../pages/elegir-liga/elegir-liga';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

<<<<<<< HEAD
  rootPage:any = TabPage;

=======
  rootPage:any = RegistroUsuariosPage;
>>>>>>> fc2cadb593639f5e90f127376651c941a06d9aa3

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
