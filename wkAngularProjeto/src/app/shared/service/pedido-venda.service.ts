import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, pluck } from 'rxjs/operators';
import { itensCarrinho, Pedido } from '../entidades/classes/pedidoVendaData';
import { Produto } from '../entidades/classes/produtoData';
import { ajax } from 'rxjs/ajax';

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

  // Busca todos e com push adiciona o novo na lista
 // Retorna a key do novo caso precise
 insert(cli: Pedido){
  this.pedidoVenda = cli

  this.db.list<Pedido>('PedidoVenda').push(cli)
  .then((result: any) => {
    //Pega o objeto e bota a key que acabou de ganhar!
    this.pedidoVenda.idVenda = result.key;
    this.update(this.pedidoVenda, result.key);
  });
 }

 // Busca todos e depois atualiza o dado especifico
 update(pedido: Pedido, key: string){
  this.db.list<Pedido>('PedidoVenda').update(key, pedido)
  .catch((error: any) => {
    console.log(error);
  });
 }

 // Cria uma copia da lista de todos, e converte para um novo modelo
 getAll(){
  return this.db.list<Pedido>('PedidoVenda')
  .snapshotChanges()
  .pipe(
    map((changes) =>{
       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    })
  );
 }


 // Cria uma copia da lista de todos, e converte para um novo modelo
 getAll2(){
  return this.db.list<Pedido>('PedidoVenda')
  .snapshotChanges()
  .pipe(
    map((changes) =>
    {
        console.log("oq tem aki: ", changes);

        return changes.map((c, i) =>
       {
          return {
            idVenda: c.payload.val()?.idVenda,
            cliente: c.payload.val()?.cliente,
            dataHora: c.payload.val()?.dataHora,
            totalVenda: c.payload.val()?.totalVenda,
            listProdutos: c.payload.val()?.listProdutos
          } as Pedido

          // let user = c.payload.toJSON();
          // console.log('teste valor: ', user);
          // return user



        });
    }
  )
 )

 }

 getAll3(){
   //return this.http.get<Pedido>("https://wkprojeto-default-rtdb.firebaseio.com/PedidoVenda.json")

   return ajax('https://wkprojeto-default-rtdb.firebaseio.com/PedidoVenda.json');

 }

 // Informa qual objeto deve ser deletado, usando a key
 delete(key: string){
  this.db.object(`PedidoVenda/${key}`).remove();
 }

}
