import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userName: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AngularFireAuth,
    ) {




  }

  ionViewDidLoad() {
    const userState = this.auth.authState.subscribe( user => {
      if (user){
        this.userName = user.displayName;
        userState.unsubscribe();
      }

    })
  }


}
