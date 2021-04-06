import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class LembreteProvider {
  private PATH = 'lembret/';

  constructor(private db:AngularFireDatabase) {
    console.log('Hello LembreteProvider Provider');
  }

  getAlll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map( c =>({ key: c.key, ...c.payload.val() }));
    })
  }

  get(categorkey:string){
    return this.db.object(this.PATH + categorkey)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val() };
    })
  }



  save(descricaoData: any){
    const descricao = {
      titulo:descricaoData.titulo,
      descricao:descricaoData.descricao,

    };
    if(descricaoData.key){
      this.db.list(this.PATH).update(descricaoData.key, descricao);
    }else{
      this.db.list(this.PATH).push(descricao)
    }

  }

  remove(key:string){
    this.db.list(this.PATH).remove(key);

 }

}
