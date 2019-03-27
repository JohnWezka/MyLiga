import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioMarcadorPage } from './formulario-marcador';

@NgModule({
  declarations: [
    FormularioMarcadorPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioMarcadorPage),
  ],
})
export class FormularioMarcadorPageModule {}
