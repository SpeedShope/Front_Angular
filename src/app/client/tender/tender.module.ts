import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';

import { AddTenderComponent } from './add-tender/add-tender.component';
import { GetTenderComponent } from './get-tender/get-tender.component';
import { UpdateTenderComponent } from './update-tender/update-tender.component';
import { DeletTenderComponent } from './delet-tender/delet-tender.component';

import { DetailTenderComponent } from '../tender/detail-tender/detail-tender.component';
import { RegistreComponent } from '../registre/registre.component';
import { LoginComponent } from '../login/login.component';

import { AppModule } from 'src/app/app.module';
import { ClientComponent } from '../client.component';


@NgModule({
  declarations: [
    
 
  

   
    AddTenderComponent,
    GetTenderComponent,
    UpdateTenderComponent,
    DeletTenderComponent,
    DetailTenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TenderRoutingModule,
    ReactiveFormsModule,
    
    
    FormsModule
    
  ],
  providers: [],
 
})
export class tenderModule { }
