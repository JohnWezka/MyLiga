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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage,
    RegistroJugadorPage
=======
    RegistroTorneoPage,
    LoginPage
>>>>>>> cd93ce5716f390a7a4e871d6ec7af7c04ed0f3ca
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    LoginPage,
    RegistroJugadorPage
=======
    RegistroTorneoPage,
    LoginPage

>>>>>>> cd93ce5716f390a7a4e871d6ec7af7c04ed0f3ca
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
