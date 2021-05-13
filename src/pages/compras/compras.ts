import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';
// import { AngularFireAuth } from 'angularfire2/auth';
import { ComprasProvider } from '../../providers/compras/compras';


@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {
  // userName: string;
  categorias: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    // private auth: AngularFireAuth,
    private comprasProvider: ComprasProvider) {

      this.categorias = this.comprasProvider.getAll();


  }

  // ionViewDidLoad() {
  //   const userState = this.auth.authState.subscribe( user => {
  //     if (user){
  //       this.userName = user.displayName;
  //       userState.unsubscribe();
  //     }

  //   })
  // }

  newCategory(){
    this.navCtrl.push('EditComprasPage');
  }



  editCategory(categoria: any){
    this.navCtrl.push('EditComprasPage', { categoriakey: categoria.key});
  }

  removeCategory(key:string){
    this.comprasProvider.remove(key);
    this.toast.create({message:'Categoria removida com sucesso!', duration: 3000}).present();
  }

  listProdutos(categoria: any){
    this.navCtrl.push('DetalhePage', {categoriakey: categoria.key})
  }

}
