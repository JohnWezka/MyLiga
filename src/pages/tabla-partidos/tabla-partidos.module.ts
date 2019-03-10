import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablaPartidosPage } from './tabla-partidos';

@NgModule({
  declarations: [
    TablaPartidosPage,
  ],
  imports: [
    IonicPageModule.forChild(TablaPartidosPage),
  ],
})
export class TablaPartidosPageModule {}
