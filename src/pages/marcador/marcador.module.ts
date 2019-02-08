import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcadorPage } from './marcador';

@NgModule({
  declarations: [
    MarcadorPage,
  ],
  imports: [
    IonicPageModule.forChild(MarcadorPage),
  ],
})
export class MarcadorPageModule {}
