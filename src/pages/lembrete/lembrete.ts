import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LembreteProvider } from '../../providers/lembrete/lembrete';


@IonicPage()
@Component({
  selector: 'page-lembrete',
  templateUrl: 'lembrete.html',
})
export class LembretePage {

  lembretes: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,

              private lembreteProvider: LembreteProvider) {

                this.lembretes = this.lembreteProvider.getAlll();
  }




  newLembrete(){
    this.navCtrl.push('EditLembretePage');
  }

  editLembrete(lembrete: any){
    this.navCtrl.push('EditLembretePage', { lembretekey: lembrete.key});
  }

  removeLembrete(key:string){
    this.lembreteProvider.remove(key);
    this.toast.create({message:'Lembrete removido com sucesso!', duration: 3000}).present();
  }

  listLembretes(lembrete: any){
    this.navCtrl.push('DescricaoPage', {lembretekey: lembrete.key})
  }

}
