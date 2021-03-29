import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment.prod';

//FireBase
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';
//Material
import { MatListModule} from '@angular/material/list';
//ngx bootstrap
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoComponent } from './pedido-venda/carrinho/carrinho.component';
import { CheckoutComponent } from './pedido-venda/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase), //firebase
    AngularFireDatabaseModule,

    MatListModule, //material

    CollapseModule.forRoot(), //ngx-bootstrap

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
