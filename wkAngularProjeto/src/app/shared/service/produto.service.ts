import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, tap } from "rxjs/operators";
//firebase
import { AngularFireDatabase } from '@angular/fire/database';
//entidades
import { IProduto, Produto } from '../entidades/classes/produtoData';
import { CrudSimplesService } from './crud-simples.service';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudSimplesService<Produto> {

  //protected readonly API = `${environment.API}Produtos.json`;

  produto: Produto = {} as Produto;

  listPordutos!: Observable<Produto[]>;

  constructor(
    private db: AngularFireDatabase,
    protected http: HttpClient)
  {
    super(http, `${environment.API}Produtos.json`);
   }

  // Busca todos e com push adiciona o novo na lista
  // Retorna a key do novo caso precise
  insert(produtos: Produto){
    this.produto = produtos

    this.db.list<Produto>('Produtos').push(produtos)
    .then((result: any) => {

      console.log(result.key);
      //Pega o objeto e bota a key que acabou de ganhar!

      this.produto.idProduto = result.key;
      this.update(this.produto, result.key);


    });
  }

  // Busca todos e depois atualiza o dado especifico
  update(produtos: Produto, key: string){
    this.db.list<Produto>('Produtos').update(key, produtos)
    .catch((error: any) => {
      console.log(error);
    });
  }

  // Cria uma copia da lista de todos, e converte para um novo modelo
  getAll(){
    return this.db.list<Produto>('Produtos')
    .snapshotChanges()
    .pipe(
      map((changes) =>{
         return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
    );
  }


  // Cria uma copia da lista de todos, e converte para um novo modelo
  getAll2(){
    return this.db.list<Produto>('Produtos').snapshotChanges()
    .pipe(
      map((changes) =>{
         return changes.map(c => (
          {
             idProduto: c.payload.val()?.idProduto,
             nome: c.payload.val()?.nome,
             valorUnitario: c.payload.val()?.valorUnitario
           } as Produto
        ));
      })
    )
  }


  // Informa qual objeto deve ser deletado, usando a key
  delete(key: string){
    this.db.object(`Produtos/${key}`).remove();
  }



}
