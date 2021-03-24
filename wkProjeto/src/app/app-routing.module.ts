import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '', pathMatch: 'full', redirectTo: 'login'
   },
   {
     path: 'produtos',
     loadChildren: () => import('./produtos/module/produtos.module').then(p => p.ProdutosModule)
   },
   {
    path: 'login',
    loadChildren: () => import('./login/module/login.module').then(l => l.LoginModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
