import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquiposAdminPage } from './equipos-admin';

@NgModule({
  declarations: [
    EquiposAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(EquiposAdminPage),
  ],
})
export class EquiposAdminPageModule {}
