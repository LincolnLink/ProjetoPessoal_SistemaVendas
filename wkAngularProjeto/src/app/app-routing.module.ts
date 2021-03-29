import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
   },
   {
     path: 'produto',
     loadChildren: () => import('./produto/module/produto.module').then(p => p.ProdutoModule)
   },
   {
    path: 'cliente',
    loadChildren: () => import('./cliente/module/cliente.module').then(c => c.ClienteModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/module/home.module').then(h => h.HomeModule)
  },
  {
    path: 'pedidoVenda',
    loadChildren: () => import('./pedido-venda/module/pedido-venda.module').then(p => p.PedidoVendaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
