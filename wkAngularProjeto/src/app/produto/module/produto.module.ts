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



@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule, //card
    MatButtonModule //btn
  ]
})
export class ProdutoModule { }
