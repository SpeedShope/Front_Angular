import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCardService } from 'src/app/_services/add-to-card.service';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products!:Product[];
  constructor(private service : ProductService, private cart : AddToCardService,private diag: MatDialog){}
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      data => this.products = data
    )
  }
  addToCart(product: any) {
    this.cart.addToCart(product);
    window.alert("add")
  }
}
