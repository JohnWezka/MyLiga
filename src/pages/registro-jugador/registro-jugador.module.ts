import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroJugadorPage } from './registro-jugador';

@NgModule({
  declarations: [
    RegistroJugadorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroJugadorPage),
  ],
})
export class RegistroJugadorPageModule {}
