import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '', pathMatch: 'full', redirectTo: 'produtos'
   },
   {
     path: 'produtos',
     loadChildren: () => import('./produtos/module/produtos.module').then(p => p.ProdutosModule)
   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
