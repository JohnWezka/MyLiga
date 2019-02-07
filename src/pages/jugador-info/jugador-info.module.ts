import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JugadorInfoPage } from './jugador-info';

@NgModule({
  declarations: [
    JugadorInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(JugadorInfoPage),
  ],
})
export class JugadorInfoPageModule {}
