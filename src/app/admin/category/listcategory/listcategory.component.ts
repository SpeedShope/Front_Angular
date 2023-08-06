import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryserviceService } from '../../../_services/categoryservice.service'

import {Router} from "@angular/router";

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent {
categories:Category[]=[];
searchText=""
p: number = 1
count : number = 5 
constructor(private categoryservice:CategoryserviceService ,private router:Router){}
ngOnInit() {
 this.getcategory()
}

getcategory(){
  this.categoryservice.getCategoryUser().subscribe(data=>
    this.categories=data)
}
  addProductRoute(id:number){
    this.router.navigateByUrl("/admin/addProduct/"+id)
  }
  ProductsOfCategoryRoute(id:number){
    this.router.navigateByUrl("/admin/listProductofcategory/"+id)
  }

}
