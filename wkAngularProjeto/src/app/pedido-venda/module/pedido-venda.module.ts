import { VendaDeactivateGuard } from './../../shared/guard/venda-deactivate.guard';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoVendaComponent } from '../pedido-venda.component';
import { PedidoVendaFormComponent } from '../pedido-venda-form/pedido-venda-form.component';
import { PedidoVendaListComponent } from '../pedido-venda-list/pedido-venda-list.component';
import { PeditoVendaRoutingModule } from './pedido-venda-routing';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    PedidoVendaComponent,
    PedidoVendaListComponent,
    PedidoVendaFormComponent,
    CarrinhoComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PeditoVendaRoutingModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  entryComponents: [CheckoutComponent],

})
export class PedidoVendaModule { }
