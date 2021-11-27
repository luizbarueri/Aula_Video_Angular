import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
