import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleLigaPage } from './detalle-liga';

@NgModule({
  declarations: [
    DetalleLigaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleLigaPage),
  ],
})
export class DetalleLigaPageModule {}
