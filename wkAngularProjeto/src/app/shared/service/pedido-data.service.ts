import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pedido } from './../entidades/classes/pedidoVendaData';

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {

  // Propriedade que emite valores sendo inicializada
  // BehaviorSubject: Mantem o estado e tem sempre o ultimo valor,
  // ele sempre a tualiza o ultimo valor que foi emitido.
  private pedidoSource = new BehaviorSubject({ pedido: {} as Pedido, key: ''});

  //Recebe a emição dos dados!
  currentPedido = this.pedidoSource.asObservable();

  constructor() { }

  // Recebe o valor do objeto e da key, que vai ser editado!
  // Depois emite os dados(next).
  changeContato(pedido: Pedido, key: string){
    this.pedidoSource.next({ pedido: pedido, key: key });
  }
}
