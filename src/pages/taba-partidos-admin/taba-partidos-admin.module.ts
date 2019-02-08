import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabaPartidosAdminPage } from './taba-partidos-admin';

@NgModule({
  declarations: [
    TabaPartidosAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(TabaPartidosAdminPage),
  ],
})
export class TabaPartidosAdminPageModule {}
