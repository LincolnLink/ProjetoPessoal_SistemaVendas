import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoResolverGuard } from "../guards/produtos-resolver.guard";
import { ProdutosFormComponent } from "../produtos-form/produtos-form.component";
import { ProdutosComponent } from './../produtos.component';


const routes: Routes = [

  { path: '', component: ProdutosComponent },
  { path: 'novo', component: ProdutosFormComponent },
  {
    path: 'editar', //path: 'editar/:id',
    component: ProdutosFormComponent,
    resolve: {produtoDaUrl: ProdutoResolverGuard}
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
