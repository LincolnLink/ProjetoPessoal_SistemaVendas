import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment.prod';

//FireBase
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component'


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule //firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
