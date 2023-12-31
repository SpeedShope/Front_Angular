import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AddTenderComponent } from './tender/add-tender/add-tender.component';
import { GetTenderComponent } from './tender/get-tender/get-tender.component';
import { DetailTenderComponent } from './tender/detail-tender/detail-tender.component';
import { UpdateTenderComponent } from './tender/update-tender/update-tender.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { DeliveryagentFormComponent } from './deliveryagent-form/deliveryagent-form.component';
import { OurServiceFormComponent } from './our-service-form/our-service-form.component';
import { ShowproductComponent } from './productClient/showproduct/showproduct.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { AddOrderPopupComponent } from './add-order-popup/add-order-popup.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [  { path:'', component:ClientComponent, children:[
  {path:'verifyaccount/:username',component:VerifyAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'registre',component:RegistreComponent},
  {path:'home',component:HomeComponent}, 
  {path:'profile',component:ProfileComponent}, 
  {path:'forgetpassword',component:ForgetpasswordComponent}, 
  {path:'resetpassword/:email',component:ResetpasswordComponent}, 
  {path:'updateuser',component:UpdateuserComponent}, 
  {path: 'addtender' , component:AddTenderComponent},
{path: 'gettender' , component:GetTenderComponent},
{path: 'detailtender/:id' , component:DetailTenderComponent},
{path: 'updatetender/:id' , component:UpdateTenderComponent},
{path:'update/:id',component:AddTenderComponent},
{path:'Services',component:OurServiceFormComponent},
{
  path:'contractForm/:id',component:DeliveryagentFormComponent
},
{path:'showPr/:id',component:ShowproductComponent}, 
{path:'add-to-card',component:AddToCardComponent},
{path:'add-order',component:AddOrderPopupComponent},
{path:'checkout',component:CheckoutComponent},


  {path: '**' , pathMatch:"full" , redirectTo:"login" }


]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
