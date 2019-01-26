import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroUsuariosPage } from './registro-usuarios';

@NgModule({
  declarations: [
    RegistroUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroUsuariosPage),
  ],
})
export class RegistroUsuariosPageModule {}
