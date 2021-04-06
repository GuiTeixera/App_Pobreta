import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LembreteProvider } from '../../providers/lembrete/lembrete';



@IonicPage()
@Component({
  selector: 'page-descricao',
  templateUrl: 'descricao.html',
})
export class DescricaoPage {
  lembrete:any;
  title: string;
  titulolembrete:string;
  descricaolembrete:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toast: ToastController,
              private lembreteProvider: LembreteProvider) {
                this.SetupPageTitle();

                this.lembrete = this.navParams.data.lembrete || {};
                const consulta = this.lembreteProvider
                .get(this.navParams.data.lembretekey).subscribe((Data:any) => {
                      consulta.unsubscribe();
                                  this.lembrete = Data;
                                  this.titulolembrete = this.lembrete.titulo;
                                  this.descricaolembrete = this.lembrete.descricao;

                });
  }

  private SetupPageTitle(){
    if (this.navParams.data.categor){
      this.title = 'List Ativos';
    }
  }

  editLembrete(lembrete: any){
    this.navCtrl.push('EditLembretePage', { lembretekey: lembrete.key});
  }

  removeLembrete(key:string){
    this.lembreteProvider.remove(key);
    this.toast.create({message:'Lembrete removido com sucesso!', duration: 3000}).present();
  }



}
