import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { AdministradorPage } from '../administrador/administrador';
import { TabsAdminPage } from '../tabs-admin/tabs-admin';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  liga: any;

  email: any;
  password: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public afAuth: AngularFireAuth,
    public alertCtrl: AlertController) {
    this.liga = navParams.data;
    console.log(this.liga);
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
      
    }).catch((error) => {
      const alert = this.alertCtrl.create({
        title: '¡Error!',
        subTitle: 'El usuario o contraseña son incorrectos',
        buttons: ['OK']
      });
      alert.present();
    });;
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
