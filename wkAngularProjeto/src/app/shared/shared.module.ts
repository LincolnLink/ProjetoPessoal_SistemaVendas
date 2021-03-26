import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MsnValidComponent } from './component/msn-valid/msn-valid.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    MsnValidComponent
  ],
  exports:[MsnValidComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AlertModule.forRoot()

  ]
})
export class SharedModule { }
