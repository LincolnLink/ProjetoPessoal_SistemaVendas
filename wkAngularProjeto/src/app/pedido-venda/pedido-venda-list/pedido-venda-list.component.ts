import { map, catchError } from 'rxjs/operators';
import { PedidoDataService } from './../../shared/service/pedido-data.service';
import { Pedido } from './../../shared/entidades/classes/pedidoVendaData';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subscriber, forkJoin } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoVendaService } from 'src/app/shared/service/pedido-venda.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'pedido-venda-list',
  templateUrl: './pedido-venda-list.component.html',

})
export class PedidoVendaListComponent implements OnInit, AfterViewInit {


    Pedido0$!: Observable<any>;
    Pedido1!: Observable<Pedido[]>;


    constructor(
    private pedidoDataServico: PedidoDataService,
    private pedidoService: PedidoVendaService,
    private router: Router,
    private route: ActivatedRoute,) { }


    ngAfterViewInit(): void {

    }

    ngOnInit(): void {

       this.Pedido1 = this.pedidoService.getAll2()

    }

    // Deleta o item
    excluir(key: string){
      this.pedidoService.delete(key);
    }

    //Preparando forma para novos dados
    novo(pedido: Pedido = {} as Pedido, key: string = ''){

      // Com o router você nevega para a pagina de edição!
      this.pedidoDataServico.changeContato(pedido, key);
      this.router.navigate(['novo'], {relativeTo: this.route});
    }





}
