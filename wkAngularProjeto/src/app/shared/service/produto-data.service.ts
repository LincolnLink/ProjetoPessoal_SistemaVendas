import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../entidades/classes/produtoData';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDataService {

  // Propriedade que emite valores sendo inicializada
  // BehaviorSubject: Mantem o estado e tem sempre o ultimo valor,
  // ele sempre a tualiza o ultimo valor que foi emitido.
  private produtosSource = new BehaviorSubject({ produtos: {} as Produto, key: ''});

  //Recebe a emição dos dados!
  currentPordutos = this.produtosSource.asObservable();

  constructor() { }

  // Recebe o valor do objeto e da key, que vai ser editado!
  // Depois emite os dados(next).
  changeContato(produtos: Produto, key: string){
    this.produtosSource.next({ produtos: produtos, key: key });
  }
}
