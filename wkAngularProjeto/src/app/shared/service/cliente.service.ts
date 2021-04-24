import { Cliente } from './../entidades/classes/clienteData';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

 //protected readonly API = `${environment.API}Produtos.json`;

 cliente: Cliente = {} as Cliente;

 //listPordutos!: Observable<Cliente[]>;

 constructor(
   private db: AngularFireDatabase,
   protected http: HttpClient)
  {
   //super(http, `${environment.API}Produtos.json`);
  }

 // Busca todos e com push adiciona o novo na lista
 // Retorna a key do novo caso precise
 insert(cli: Cliente){
   this.cliente = cli

   this.db.list<Object>('Cliente').push(cli)
   .then((result: any) => {

     console.log(result.key);
     //Pega o objeto e bota a key que acabou de ganhar!

     this.cliente.idCliente = result.key;
     this.update(this.cliente, result.key);


   });
 }

 // Busca todos e depois atualiza o dado especifico
 update(cli: Cliente, key: string){
   this.db.list<Cliente>('Cliente').update(key, cli)
   .catch((error: any) => {
     console.log(error);
   });
 }

 // Cria uma copia da lista de todos, e converte para um novo modelo
 getAll(){
   return this.db.list<Cliente>('Cliente')
   .snapshotChanges()
   .pipe(
     map((changes) =>{
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
     })
   );
 }


 // Cria uma copia da lista de todos, e converte para um novo modelo

 getAll2(){
   return this.db.list<Cliente>('Cliente').snapshotChanges()
   .pipe(
     map((changes) =>{
        return changes.map(c => (
         {
            idCliente: c.payload.val()?.idCliente,
            nome: c.payload.val()?.nome,
            cpf: c.payload.val()?.cpf,
            dataNascimento: c.payload.val()?.dataNascimento,
            email: c.payload.val()?.email,
            endereco : {
              cep: c.payload.val()?.endereco.cep,
              rua: c.payload.val()?.endereco.rua,
              bairro: c.payload.val()?.endereco.bairro,
              cidade: c.payload.val()?.endereco.cidade,
              estado: c.payload.val()?.endereco.estado,
              numero: c.payload.val()?.endereco.numero,
              complemento: c.payload.val()?.endereco.complemento,
            }
         } as Cliente
       ));
     })
   )
 }


 // Informa qual objeto deve ser deletado, usando a key
 delete(key: string){
   this.db.object(`Cliente/${key}`).remove();
 }

}
