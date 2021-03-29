import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,

} from 'rxjs';

import { itensCarrinho} from './../entidades/classes/pedidoVendaData';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private subject = new BehaviorSubject<itensCarrinho[]>([]);

  private orderItems$: Observable<itensCarrinho[]> = this.subject.asObservable();

  constructor() { }

  getItems(): Observable<itensCarrinho[]>{
    return this.orderItems$;
  }

  addItem(orderItem: itensCarrinho) {
    const orderItems = this.subject.getValue();

    const productIndex = orderItems.findIndex(item => item.idProduto === orderItem.idProduto);

    if(productIndex >= 0){

      const updatedOrderItem = orderItems[productIndex];

      updatedOrderItem.quantidade +=1;

      const newOrderItems = orderItems.slice(0);

      newOrderItems[productIndex] = {
        ...orderItems[productIndex],
        ...updatedOrderItem
      }

    } else {
      orderItems.push(orderItem)
    }
    this.subject.next(orderItems);
  }

  removeItem(orderItem: itensCarrinho) {
    let orderItems = this.subject.getValue();

    const productIndex = orderItems.findIndex(item => item.idProduto === orderItem.idProduto);

    if(productIndex >= 0){

      const updatedOrderItem = orderItems[productIndex];

      updatedOrderItem.quantidade -=1;

      orderItems = orderItems.filter(i => i.idProduto !== orderItem.idProduto);

      const newOrderItems = orderItems.slice(0);

      newOrderItems[productIndex] = {
        ...orderItems[productIndex],
        ...updatedOrderItem
      }

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
