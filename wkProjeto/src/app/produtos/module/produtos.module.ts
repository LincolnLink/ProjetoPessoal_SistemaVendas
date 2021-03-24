import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from '../produtos.component';
import { CursosRoutingModule } from './produtos-routing.module';
import { ProdutosFormComponent } from '../produtos-form/produtos-form.component';
import { ProdutosListComponent } from '../produtos-list/produtos-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosFormComponent,
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
