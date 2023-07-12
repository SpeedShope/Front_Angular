import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing';
import { ProfileComponent } from './profile/profile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddTenderComponent } from './tender/add-tender/add-tender.component';
import { GetTenderComponent } from './tender/get-tender/get-tender.component';
import { UpdateTenderComponent } from './tender/update-tender/update-tender.component';
import { DeletTenderComponent } from './tender/delet-tender/delet-tender.component';
import { DetailTenderComponent } from './tender/detail-tender/detail-tender.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ClientComponent,
    FooterComponent,
    VerifyAccountComponent,
    HomeComponent,
    LoginComponent,
    RegistreComponent,
    ProfileComponent,
    UpdateuserComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,   
    AddTenderComponent,
    GetTenderComponent,
    UpdateTenderComponent,
    DeletTenderComponent,
    DetailTenderComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class ClientModule { }
