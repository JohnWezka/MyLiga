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
import { AdministradorPage } from '../pages/administrador/administrador';
import { RegistroLigaPage } from '../pages/registro-liga/registro-liga';
import { EquipoPrincipalPage } from '../pages/equipo-principal/equipo-principal';
import { TabsAdminPage } from '../pages/tabs-admin/tabs-admin';
import { EquiposAdminPage } from '../pages/equipos-admin/equipos-admin';
import { RegistroUsuariosPage } from '../pages/registro-usuarios/registro-usuarios';
import { ElegirLigaPage } from '../pages/elegir-liga/elegir-liga';
import { JugadorInfoPage } from '../pages/jugador-info/jugador-info';
import { RegistroPartidosPage } from '../pages/registro-partidos/registro-partidos';

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
    RegistroLigaPage,
    EquipoPrincipalPage,
    AdministradorPage,
    TabsAdminPage,
    EquiposAdminPage,
    RegistroUsuariosPage,
    ElegirLigaPage,
    JugadorInfoPage,
    RegistroPartidosPage
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
    RegistroLigaPage,
    EquipoPrincipalPage,
    AdministradorPage,
    TabsAdminPage,
    EquiposAdminPage,
    RegistroUsuariosPage,
    ElegirLigaPage,
    JugadorInfoPage,
    RegistroPartidosPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
