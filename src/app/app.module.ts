import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { RegistroTorneoPage } from '../pages/registro-torneo/registro-torneo';
=======
import { LoginPage } from '../pages/login/login';
>>>>>>> aad9ad61445403b96e8e861426d88c20bb13e433

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    RegistroTorneoPage
=======
    LoginPage
>>>>>>> aad9ad61445403b96e8e861426d88c20bb13e433
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
    RegistroTorneoPage
=======
    LoginPage
>>>>>>> aad9ad61445403b96e8e861426d88c20bb13e433
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
