import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from 'src/app/shared/entidades/classes/clienteData';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {

 // Propriedade que emite valores sendo inicializada
  // BehaviorSubject: Mantem o estado e tem sempre o ultimo valor,
  // ele sempre a tualiza o ultimo valor que foi emitido.
  private clienteSource = new BehaviorSubject({ cliente: {} as Cliente, key: ''});

  //Recebe a emição dos dados!
  currentCliente = this.clienteSource.asObservable();

  constructor() { }

  // Recebe o valor do objeto e da key, que vai ser editado!
  // Depois emite os dados(next).
  changeContato(cliente: Cliente, key: string){
    this.clienteSource.next({ cliente: cliente, key: key });
  }
}
