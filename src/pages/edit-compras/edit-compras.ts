import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComprasProvider } from '../../providers/compras/compras';



@IonicPage()
@Component({
  selector: 'page-edit-compras',
  templateUrl: 'edit-compras.html',
})
export class EditComprasPage {

  title: string;
  form: FormGroup;
  categoria: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private comprasProvider: ComprasProvider) {
      this.categoria = this.navParams.data.categoria || {};
      this.SetupPageTitle();
      this.createForm();

      const consulta = this.comprasProvider.get(this.navParams.data.categoriakey).subscribe((Data: any) =>{
        consulta.unsubscribe();
        this.categoria = Data;
        this.createForm();
      });


  }

  private SetupPageTitle(){
    if(this.navParams.data.categoria){
      this.title = 'Alterando Produto';
    }
    else{
      this.title = 'Novo Produto';
    }
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key:[this.categoria.key],
      nome:[this.categoria.nome],


    })
  }

  onSubmit(){
    if(this.form.valid){
      this.comprasProvider.save(this.form.value);
      this.toast.create({ message: 'produto salvo com sucesso!', duration: 3000 }).present();
      this.navCtrl.pop();
    }
  }


}
