import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenemeStandaloneComponent } from './deneme-standalone/deneme-standalone.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DenemeStandaloneComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
