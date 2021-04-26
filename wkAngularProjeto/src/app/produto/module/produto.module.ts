import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from '../produto.component';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { ProdutoListComponent } from '../produto-list/produto-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSortModule } from '@angular/material/sort';

import { SharedModule } from 'src/app/shared/shared.module';
//Mascara de cpf/cnpj
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgxPaginationModule } from 'ngx-pagination';
import { ProdutosDeactivateGuard } from 'src/app/shared/guard/produtos-deactivate.guard';


const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(maskConfig),
    ModalModule.forRoot(),
    MatSortModule,
    NgxPaginationModule

  ]
})
export class ProdutoModule { }
