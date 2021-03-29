import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { CarrinhoService } from '../shared/service/carrinho.service';
import { PedidoVendaService } from '../shared/service/pedido-venda.service';
import { Pedido } from '../shared/entidades/classes/pedidoVendaData';

@Component({
  selector: 'app-pedido-venda',
  templateUrl: './pedido-venda.component.html',
  styleUrls: ['./pedido-venda.component.css']
})
export class PedidoVendaComponent implements OnInit {

  Pedido!: Observable<Pedido[]>;

  constructor( private pedidoService: PedidoVendaService) { }

  ngOnInit(): void {
    this.Pedido = this.pedidoService.getAll2();

  }


}
