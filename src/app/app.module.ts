import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { httpInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './client/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [httpInterceptorProviders],

  bootstrap: [AppComponent]
})
export class AppModule { }
