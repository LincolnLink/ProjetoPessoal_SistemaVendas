import { PedidoDataService } from './../../shared/service/pedido-data.service';
import { Pedido } from './../../shared/entidades/classes/pedidoVendaData';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoVendaService } from 'src/app/shared/service/pedido-venda.service';

@Component({
  selector: 'pedido-venda-list',
  templateUrl: './pedido-venda-list.component.html',

})
export class PedidoVendaListComponent implements OnInit {


    Pedido!: Observable<Pedido[]>;

    constructor(
    private pedidoDataServico: PedidoDataService,
    private pedidoService: PedidoVendaService,
    private router: Router,
    private route: ActivatedRoute,) { }


    ngOnInit(): void {
      let x ;
      this.pedidoService.getAll3().subscribe(i => x = i);
      this.Pedido = this.pedidoService.getAll2();


      //this.Pedido.subscribe( i => x = i.forEach( j => j.cliente));
      console.log("pedido: ", this.Pedido);
      console.log("x3: ", x);
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
