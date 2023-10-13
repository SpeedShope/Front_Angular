import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistreComponent } from './registre/registre.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';

import { ListtenderComponent } from './listtender/listtender.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { OrderComponent } from './order/order.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

import { ContractsDetailsAdminComponent } from './contracts-details-admin/contracts-details-admin.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AssignAgentPopupComponent } from './assign-agent-popup/assign-agent-popup.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { BilldetailsComponent } from './billdetails/billdetails.component';
import { BuyerDetailsComponent } from './buyer-details/buyer-details.component';
import { ListUsersComponent } from './list-users/list-users.component';


const routes: Routes = [  { path:'', component:AdminComponent, children:[
  {path:'registre',component:RegistreComponent},
  {path:'login',component:LoginComponent},
  {path:'listusers',component:ListUsersComponent},
  {path: 'addProduct/:id' , component:AddProduitComponent },
  {path:'addcategory',component:AddcategoryComponent},
  {path:'updateadmin',component:UpdateadminComponent},
  {path:'listtender',component:ListtenderComponent},
  {path: 'listProductofcategory/:id' , component:ListproductComponent },
  {path:'missions', component:ListeMissionComponent,children:[
    {path:'billdetails/:id',component:BilldetailsComponent},
    {path:'AgentDetails/:id',component:BuyerDetailsComponent}

  ]},
  ]},
  {path:'order',component:OrderComponent},
  {path: 'user', component: ProfileUserComponent},
  {path:'assign-delivery-agent/:orderId',component:AssignAgentPopupComponent},
  {path: 'listt' , component:ListcategoryComponent },
  {path:'home',component:HomeComponent,children:[
    {path:'contracts',component:ContractsDetailsAdminComponent},
      {path:'detail/:id',component:ContractDetailComponent},
     
        { path: '', redirectTo: 'listusers', pathMatch: 'full' }, // Redirect to 'listusers' by default
        { path: 'listusers', component: ListUsersComponent } // Add this route
        // You can add more child routes for 'home' here if needed
      

  

  ]},



  {path: '**' , pathMatch:"full" , redirectTo:"login" }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
