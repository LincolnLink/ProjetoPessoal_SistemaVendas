import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VendaDeactivateGuard } from "src/app/shared/guard/venda-deactivate.guard";
import { PedidoVendaFormComponent } from "../pedido-venda-form/pedido-venda-form.component";
import { PedidoVendaComponent } from "../pedido-venda.component";

const routes: Routes = [

  { path: '', component: PedidoVendaComponent },
  {
    path: 'novo',
    component: PedidoVendaFormComponent,
    // canDeactivate: [VendaDeactivateGuard]
  },
  {
    path: 'editar', //path: 'editar/:id',
    component: PedidoVendaFormComponent,

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeditoVendaRoutingModule {}
