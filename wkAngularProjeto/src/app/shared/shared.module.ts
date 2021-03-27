import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MsnValidComponent } from './component/msn-valid/msn-valid.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MsnValidComponent
  ],
  exports:[
    ReactiveFormsModule,
    HttpClientModule,
    MsnValidComponent,
    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule, //card
    MatButtonModule, //btn

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    MatTableModule, //Tabela do Angular Material
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatCardModule, //card
    MatButtonModule, //btn

  ]
})
export class SharedModule { }
