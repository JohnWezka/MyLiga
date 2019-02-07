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

import { RegistroUsuariosPage } from '../pages/registro-usuarios/registro-usuarios';
import { ElegirLigaPage } from '../pages/elegir-liga/elegir-liga';
import { JugadorInfoPage } from '../pages/jugador-info/jugador-info';
<<<<<<< HEAD
import { RegistroPartidosPage } from '../pages/registro-partidos/registro-partidos';
import { RegistroPartidosAdminPage } from '../pages/registro-partidos-admin/registro-partidos-admin';

=======
import { TablaDePuntosPage } from '../pages/tabla-de-puntos/tabla-de-puntos';
>>>>>>> f6701f198c2e7a1261ebc9d1d4d1968b663e6325
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
<<<<<<< HEAD
@ViewChild(Nav) nav: Nav;

=======
<<<<<<< HEAD
  rootPage:any = AdministradorPage ;
=======

  rootPage:any = TablaDePuntosPage;
>>>>>>> f6701f198c2e7a1261ebc9d1d4d1968b663e6325

  rootPage:any = RegistroPartidosPage;
  pages: Array<{title: String, Component: any}>;

>>>>>>> e8d44f7a61f065cf2df9e3acd76e61d0b7333b85
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
