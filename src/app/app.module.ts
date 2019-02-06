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
import { MarcadorPage } from '../pages/marcador/marcador';
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
    MarcadorPage
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
    MarcadorPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
