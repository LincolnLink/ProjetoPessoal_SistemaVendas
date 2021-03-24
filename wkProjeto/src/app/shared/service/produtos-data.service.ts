import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produtos } from '../Entidades/classes/produtosData';

@Injectable({
  providedIn: 'root'
})
export class ProdutosDataService {

  // Propriedade que emite valores sendo inicializada
  // BehaviorSubject: Mantem o estado e tem sempre o ultimo valor,
  // ele sempre a tualiza o ultimo valor que foi emitido.
  private produtosSource = new BehaviorSubject({ produtos: {} as Produtos, key: ''});

  //Recebe a emição dos dados!
  currentPordutos = this.produtosSource.asObservable();

  constructor() { }

  // Recebe o valor do objeto e da key, que vai ser editado!
  // Depois emite os dados(next).
  changeContato(produtos: Produtos, key: string){
    this.produtosSource.next({ produtos: produtos, key: key });
  }
}
