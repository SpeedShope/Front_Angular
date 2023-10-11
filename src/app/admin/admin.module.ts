import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';
import { ListcategoryComponent } from './category/listcategory/listcategory.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ListtenderComponent } from './listtender/listtender.component';
import { OrderComponent } from './order/order.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';

import { ContractsDetailsAdminComponent } from './contracts-details-admin/contracts-details-admin.component';
import { ContractDetailComponent } from './contract-detail/contract-detail.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AddProduittenderComponent } from './add-produittender/add-produit.component';
import { ListproducttenderComponent } from './listproducttender/listproduct.component';




@NgModule({
  declarations: [
    ListtenderComponent,
    ListproductComponent,
    ListproducttenderComponent,
    OrderComponent,
    ProfileUserComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    AddcategoryComponent,
    UpdateadminComponent,
    ListcategoryComponent,
    AddProduitComponent,
    AddProduittenderComponent,

   
  

    RegistreComponent,
    ContractsDetailsAdminComponent,
    ContractDetailComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
