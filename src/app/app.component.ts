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



import { TablaDePuntosPage } from '../pages/tabla-de-puntos/tabla-de-puntos';
import { TablaPartidosPage } from '../pages/tabla-partidos/tabla-partidos';
import { TabaPartidosAdminPage } from '../pages/taba-partidos-admin/taba-partidos-admin';

=======
<<<<<<< HEAD
import { EquiposAdminPage } from '../pages/equipos-admin/equipos-admin';
=======
import { RegistroMarcadorPage } from '../pages/registro-marcador/registro-marcador';
import { TablaDePuntosPage } from '../pages/tabla-de-puntos/tabla-de-puntos';
>>>>>>> c76e3f5dff896b87097ca0ae636e553d7ad8b96d
>>>>>>> c47817f87f6a2f4d94515747d395d261a2947c46
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
<<<<<<< HEAD

<<<<<<< HEAD
@ViewChild(Nav) nav: Nav;


  rootPage:any = TabaPartidosAdminPage;
  
  pages: Array<{title: String, Component: any}>;


=======
  rootPage:any = EquiposAdminPage;


=======
  rootPage:any = AdministradorPage ;
>>>>>>> c76e3f5dff896b87097ca0ae636e553d7ad8b96d
>>>>>>> c47817f87f6a2f4d94515747d395d261a2947c46
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
