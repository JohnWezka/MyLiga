import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroTorneoPage } from './registro-torneo';

@NgModule({
  declarations: [
    RegistroTorneoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroTorneoPage),
  ],
})
export class RegistroTorneoPageModule {}
