import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClienteDeactivateGuard } from "src/app/shared/guard/cliente-deactivate.guard";
import { ClienteFormComponent } from "../cliente-form/cliente-form.component";
import { ClienteComponent } from "../cliente.component";

const routes: Routes = [

  { path: '', component: ClienteComponent },
  { path: 'novo', component: ClienteFormComponent, canDeactivate: [ClienteDeactivateGuard] },
  {
    path: 'editar', //path: 'editar/:id',
    component: ClienteFormComponent,

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
