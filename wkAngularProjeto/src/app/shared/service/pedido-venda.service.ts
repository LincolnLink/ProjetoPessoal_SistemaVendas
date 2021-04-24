import { IProduto } from './../entidades/classes/produtoData';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { ICarrinhoItens, Pedido } from '../entidades/classes/pedidoVendaData';
import { Produto } from '../entidades/classes/produtoData';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PedidoVendaService {

  pedidoVenda : Pedido = {} as Pedido;

  teste: string = "https://wkprojeto-default-rtdb.firebaseio.com/PedidoVenda.json";

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient
  ) { }

  insert(p: Pedido){
    this.pedidoVenda = p

    this.db.list<Object>('Pedido').push(p)
    .then((result: any) => {
      //Pega o objeto e bota a key que acabou de ganhar!
      this.pedidoVenda.idVenda = result.key;
      this.update(this.pedidoVenda, result.key);
    });
  }





  // Busca todos e depois atualiza o dado especifico
  update(pedido: Pedido, key: string){
    this.db.list<Pedido>('Pedido').update(key, pedido)
    .catch((error: any) => {
      console.log(error);
    });
  }

 // Cria uma copia da lista de todos, e converte para um novo modelo
 getAll(){
  return this.db.list<Pedido>('Pedido')
  .snapshotChanges()
  .pipe(
    map((changes) =>{
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        return changes
    })
  );
 }


 getAll2(){
  return this.db.list<Pedido>('Pedido').snapshotChanges()
  .pipe(
    map((changes) =>{
      return changes.map(c => (
        {
          // idVenda: c.idVenda,
          // dataHora: c.dataHora,
          // cliente: c.cliente,
          // totalVenda: c.totalVenda

          idVenda: c.payload.val()?.idVenda,
          dataHora: c.payload.val()?.dataHora,
          cliente: c.payload.val()?.cliente,
          totalVenda: c.payload.val()?.totalVenda,
          listItens: c.payload.val()?.listItens

        } as Pedido
      ));
    })
  )}



  getAll3(){
    //return this.http.get<Pedido>("https://wkprojeto-default-rtdb.firebaseio.com/PedidoVenda.json")

    return ajax('https://wkprojeto-default-rtdb.firebaseio.com/PedidoVenda.json').subscribe(
      (simple: AjaxResponse) =>{

        const simpleResponse = JSON.stringify(simple.response, null, 2);
        let testeValor: any = JSON.parse(simpleResponse);
        // console.log("valor tratado: ", simpleResponse )
      }
    );
  }

  // Informa qual objeto deve ser deletado, usando a key
  delete(key: string){
    this.db.object(`Pedido/${key}`).remove();
  }

}
