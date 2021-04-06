
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { DetalheProvider } from '../../providers/detalhe/detalhe';



@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  treinos: Observable<any[]>;
  categoria:any;
  form: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,

              private detalheProvider: DetalheProvider, private toast: ToastController,) {

              this.categoria = this.navParams.data.categoria || {};
              this.treinos = this.detalheProvider.getAllTreinos(this.navParams.data.categoriakey);

  }

  // editItemProdutos(treinos: any) {                      // categoria.key é igual ao
  //   this.navCtrl.push('EditDetalhePage', { treinosKey: treinos.key });
  // }

  removeItemProdutos(key:string) {
    this.detalheProvider.remove(key);
    this.toast.create({message:'Produto removido com sucesso!', duration: 3000}).present();
  }








  newDetail() {
    this.navCtrl.push('EditDetalhePage');
  }

}
