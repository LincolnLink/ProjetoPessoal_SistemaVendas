import { ClienteDeactivateGuard } from './../../shared/guard/cliente-deactivate.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from '../cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MatListModule } from '@angular/material/list';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
//Mascara de cpf/cnpj
import { NgxMaskModule, IConfig } from 'ngx-mask'
//ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';


const maskConfig: Partial<IConfig> = {
  validation: false,
};


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
    NgxMaskModule.forRoot(maskConfig),
    ModalModule.forRoot()
  ]
})
export class ClienteModule { }
