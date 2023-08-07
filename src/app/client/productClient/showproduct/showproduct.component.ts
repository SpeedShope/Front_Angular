import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/_services/product.service';
import { AddToCardService } from 'src/app/_services/add-to-card.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderPopupComponent } from '../../add-order-popup/add-order-popup.component';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {
  products:Product[]=[];
category:Category[]=[];
currentPage: number = 1;
itemsPerPage: number = 6; 
searchText = '';


constructor(private productservice:ProductService , private cart : AddToCardService,private diag: MatDialog) {}
  ngOnInit(): void {
this.getAllProduct()
this.getAllCategories()

  }

getAllProduct(){
  this.productservice.getProducts().subscribe((data) => {

  this.products = data.map((product:Product) => {
    console.log(product);
    return product;
  });
});
  }
  getAllCategories(){
this.productservice.getAllCategory().subscribe(data=>{
  this.category=data;
  console.log(data);
});
}

  filter(event:any) {
let value = event.target.value;
console.log(value);
if(value=="ALL"){
  this.getAllProduct();
}else
this.getProductByCategories(value);
  }
  getProductByCategories(keyword:string){
  return this.productservice.getProductsByCategory(keyword).subscribe(data=>{

  })
  }
  addToCart(product: any) {
    this.cart.addToCart(product);
    window.alert("add")
  }
  open(){
    this.diag.open(AddOrderPopupComponent)
  }
  changePage(page: number) {
    this.currentPage = page;
  }
  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }
  get pagedTenders(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }
  
}
