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



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    LoginComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    AddProduitComponent,
    RegistreComponent
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
