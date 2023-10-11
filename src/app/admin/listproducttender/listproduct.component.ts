import { Component } from '@angular/core';
import {Product} from "src/app/models/product";
import {ProductService} from "src/app/_services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproducttenderComponent {
  products!:Product[]
  idtender!:number;
  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.idtender=this.activatedRoute.snapshot.params['id'];
    this.getAllProducts()
  }
  getAllProducts(){
    this.productService.getProductofcateg(this.idtender).subscribe((data) => {

      this.products = data.map((product:Product) => {
        return product;
      });
    });
  }
  delete(idProduct:number) {
    let v= confirm("confirmer la suppresion");
    if(v==true)
      this.productService.deleteProduit(idProduct).subscribe(data=>
      {

      })
    this.getAllProducts();
  }

  updateProductRoute(idProduct:number){
    this.router.navigateByUrl("/admin/updateProduct/"+idProduct)
  }
}
