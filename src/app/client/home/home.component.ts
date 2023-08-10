import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products!:Product[];
  constructor(private service : ProductService){}
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      data => this.products = data
    )
  }
}
