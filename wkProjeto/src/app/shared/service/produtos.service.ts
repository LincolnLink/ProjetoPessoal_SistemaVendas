import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Produtos } from '../Entidades/classes/produtosData';
import { map } from "rxjs/operators";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produto: Produtos = {} as Produtos;

  constructor(private db: AngularFireDatabase) { }

  // Busca todos e com push adiciona o novo na lista
  // Retorna a key do novo caso precise
  insert(produtos: Produtos){
    this.produto = produtos

    this.db.list('produtos').push(produtos)
    .then((result: any) => {

      console.log(result.key);
      //Pega o objeto e bota a key que acabou de ganhar!

      this.produto.idProduto = result.key;
      this.update(this.produto, result.key);
      this.produto = new Produtos();

    });
  }

  // Busca todos e depois atualiza o dado especifico
  update(produtos: Produtos, key: string){
    this.db.list('produtos').update(key, produtos)
    .catch((error: any) => {
      console.log(error);
    });
  }

  // Cria uma copia da lista de todos, e converte para um novo modelo
  getAll(){
    return this.db.list('produtos')
    .snapshotChanges()
    .pipe(
      map((changes: any) =>{
        return changes.map((c: any) => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }

  // Informa qual objeto deve ser deletado, usando a key
  delete(key: string){
    this.db.object(`produtos/${key}`).remove();
  }


}
