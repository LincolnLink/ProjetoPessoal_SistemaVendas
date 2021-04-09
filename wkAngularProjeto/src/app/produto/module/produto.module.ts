import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from '../produto.component';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { ProdutoListComponent } from '../produto-list/produto-list.component';
import { ReactiveFormsModule } from '@angular/forms';
//card
import {MatCardModule} from '@angular/material/card';
//Tabela do Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
//btn
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
//Mascara de cpf/cnpj
import { NgxMaskModule, IConfig } from 'ngx-mask'



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

  ]
})
export class ProdutoModule { }
