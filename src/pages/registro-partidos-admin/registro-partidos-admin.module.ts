import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroPartidosAdminPage } from './registro-partidos-admin';

@NgModule({
  declarations: [
    RegistroPartidosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroPartidosAdminPage),
  ],
})
export class RegistroPartidosAdminPageModule {}
