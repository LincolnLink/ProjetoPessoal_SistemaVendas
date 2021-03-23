import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produtos } from '../Entidades/classes/produtosData';

@Injectable({
  providedIn: 'root'
})
export class ProdutosDataService {

  //
  private produtosSource = new BehaviorSubject(
    {
      produtos: {} as Produtos,
      key: ''
    }
  );

  //
  currentPordutos = this.produtosSource.asObservable();

  constructor() { }

  changeContato(produtos: Produtos, key: string){
    this.produtosSource.next({

      produtos: produtos,
      key: key
    });

  }
}
