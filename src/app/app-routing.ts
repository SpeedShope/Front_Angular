import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTenderComponent } from "./client/tender/add-tender/add-tender.component";
import { GetTenderComponent } from "./client/tender/get-tender/get-tender.component";
import { DetailTenderComponent } from "./client/tender/detail-tender/detail-tender.component";
import { UpdateTenderComponent } from "./client/tender/update-tender/update-tender.component";
import { HomeComponent } from "./client/home/home.component";
import { AddProduitComponent } from "./admin/add-produit/add-produit.component";
import { AddcategoryComponent } from "./admin/category/addcategory/addcategory.component";
import { ListcategoryComponent } from "./admin/category/listcategory/listcategory.component";

const routes: Routes = [
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    
    
{path:'home',component:HomeComponent},
{path: '**' , pathMatch:"full" , redirectTo:"home" }

    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  