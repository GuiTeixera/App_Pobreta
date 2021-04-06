
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LembreteProvider } from '../../providers/lembrete/lembrete';




@IonicPage()
@Component({
  selector: 'page-edit-lembrete',
  templateUrl: 'edit-lembrete.html',
})
export class EditLembretePage {

  lembrete:any;
  form: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private lembreteProvider: LembreteProvider,) {

                this.lembrete = this.navParams.data.lembrete || {};
                // this.SetupPageTitle();
                this.createForm();

                const consulta = this.lembreteProvider.get(this.navParams.data.lembretekey).subscribe((Data: any) =>{
                  consulta.unsubscribe();
                  this.lembrete = Data;
                  this.createForm();
                });
  }

  // private SetupPageTitle(){
  //   if(this.navParams.data.lembrete){
  //     this.title = 'Alterando Descrição';
  //   }
  //   else{
  //     this.title = 'Nova Descrição';
  //   }
  // }



  private createForm(){
    this.form = this.formBuilder.group({
      key:[this.lembrete.key],
      titulo:[this.lembrete.titulo],
      descricao:[this.lembrete.descricao],
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.lembreteProvider.save(this.form.value);
      this.toast.create({ message: 'produto salvo com sucesso!', duration: 3000 }).present();
      this.navCtrl.pop();
    }
  }

}
