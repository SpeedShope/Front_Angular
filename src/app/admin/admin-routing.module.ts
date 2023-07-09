import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  { path:'', component:AdminComponent, children:[
  {path:'registre',component:RegistreComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path: '**' , pathMatch:"full" , redirectTo:"login" }
  
 
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
