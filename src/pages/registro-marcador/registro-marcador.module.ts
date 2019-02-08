import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroMarcadorPage } from './registro-marcador';

@NgModule({
  declarations: [
    RegistroMarcadorPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroMarcadorPage),
  ],
})
export class RegistroMarcadorPageModule {}
