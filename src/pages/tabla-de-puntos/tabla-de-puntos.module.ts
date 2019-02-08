import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablaDePuntosPage } from './tabla-de-puntos';

@NgModule({
  declarations: [
    TablaDePuntosPage,
  ],
  imports: [
    IonicPageModule.forChild(TablaDePuntosPage),
  ],
})
export class TablaDePuntosPageModule {}
