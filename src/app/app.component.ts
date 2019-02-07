import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
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
<<<<<<< HEAD

=======
import { RegistroUsuariosPage } from '../pages/registro-usuarios/registro-usuarios';
import { ElegirLigaPage } from '../pages/elegir-liga/elegir-liga';
import { JugadorInfoPage } from '../pages/jugador-info/jugador-info';
>>>>>>> 66c6d63f4f9d2ef7b60585d4fa6022a9c03af0f0
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
@ViewChild(Nav) nav: Nav;

<<<<<<< HEAD
<<<<<<< HEAD
  rootPage:any = RegistroJugadorPage;
  pages: Array<{title: String, Component: any}>;
=======
  rootPage:any = TabPage;
=======
  rootPage:any = RegistroUsuariosPage;
>>>>>>> 9718a61e69f52523d929be54e3ba78d354d8687e

>>>>>>> 66c6d63f4f9d2ef7b60585d4fa6022a9c03af0f0

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages=[{title: 'Home', Component: HomePage},
                  {title: 'Jugadores', Component: JugadoresPage},
                  {title: 'Registro de Arbitros', Component: RegistroArbitrosPage},
                  {title: 'Registro de Torneos', Component: RegistroTorneoPage},
                  {title: 'Registro de Torneos', Component: RegistroTorneoPage}];
    });

    
  }

  

  public openPage(page){
    this.nav.setRoot(page.Component);
  }
}
