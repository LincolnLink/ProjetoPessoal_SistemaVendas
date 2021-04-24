import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,

} from 'rxjs';

import { ICarrinhoItens} from './../entidades/classes/pedidoVendaData';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private subject = new BehaviorSubject<ICarrinhoItens[]>([]);

  private orderItems$: Observable<ICarrinhoItens[]> = this.subject.asObservable();

  constructor() { }

  getItems(): Observable<ICarrinhoItens[]>{
    return this.orderItems$;
  }

  addItem(orderItem: ICarrinhoItens) {
    const orderItems = this.subject.getValue();

    const productIndex = orderItems.findIndex(item => item.idProduto === orderItem.idProduto);

    if(productIndex >= 0){

      orderItems[productIndex].quantidade +=1;

      // const updatedOrderItem = orderItems[productIndex];

      // updatedOrderItem.quantidade +=1;

      // const newOrderItems = orderItems.slice(0);

      // newOrderItems[productIndex] = {
      //   ...orderItems[productIndex],
      //   ...updatedOrderItem
      // }

    } else {
      orderItems.push(orderItem);
    }
    this.subject.next(orderItems);
  }

  removeItem(orderItem: ICarrinhoItens) {
    let orderItems = this.subject.getValue();

    const productIndex = orderItems.findIndex(item => item.idProduto === orderItem.idProduto);

    if(productIndex >= 0){

      if( orderItems[productIndex].quantidade == 1){
        orderItems = orderItems.filter(i => i.idProduto != orderItems[productIndex].idProduto)
      }
      else
      {
        orderItems[productIndex].quantidade -=1;
      }


      // const updatedOrderItem = orderItems[productIndex];

      // updatedOrderItem.quantidade -=1;

      // orderItems = orderItems.filter(i => i.idProduto !== orderItem.idProduto);

      // const newOrderItems = orderItems.slice(0);

      // newOrderItems[productIndex] = {
      //   ...orderItems[productIndex],
      //   ...updatedOrderItem
      // }

    }
    this.subject.next(orderItems);
  }

  limparCarrinho(){
    let orderItems = this.subject.getValue();

    for(let index = orderItems.length; index != 0; index--) {
      orderItems.pop();
    }

    this.subject.next(orderItems);
  }


}
