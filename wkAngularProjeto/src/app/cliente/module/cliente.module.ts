import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from '../cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ClienteComponent,
    ClienteFormComponent,
    ClienteListComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    AccordionModule.forRoot(),
    MatListModule, //material

  ]
})
export class ClienteModule { }
