import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MsnValidComponent } from './component/msn-valid/msn-valid.component';
//Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlertModalComponent } from './component/alert-modal/alert-modal.component';


const MATERIAL_MODULES = [
  MatTableModule, //Tabela do Angular Material
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatCardModule, //card
  MatButtonModule, //btn
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
]

@NgModule({
  declarations: [
    MsnValidComponent,
    AlertModalComponent
  ],
  exports:[
    ReactiveFormsModule,
    HttpClientModule,
    MsnValidComponent,
    MATERIAL_MODULES,
    AlertModalComponent


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MATERIAL_MODULES,
    AlertModule.forRoot(),


  ]
})
export class SharedModule { }
