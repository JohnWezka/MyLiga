import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPartidosPage } from './registro-partidos';

@NgModule({
  declarations: [
    RegistroPartidosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPartidosPage),
  ],
})
export class RegistroPartidosPageModule {}
