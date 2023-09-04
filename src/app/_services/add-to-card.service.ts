import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AddToCardService {
  items :Product[] =[]
  sum=0
 // itemss : BehaviorSubject<Product>  = new BehaviorSubject<Product>(new Product());
  constructor() { 
    console.log('1');
  }

  addToCart(product: Product) {
   //     this.itemss.next(product);
   this.items.push(product);
  }

  getItems() :Product[] {
    //this.itemss.getValue().id !=null ? this.items.push(this.itemss.getValue()): this.items;
    console.log(this.items);
    return this.items ; 
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  deleteCard(index : number){
    this.items.splice(index,1)
  }

  calculsomme(){
    let a =0 
    this.items.map(x=>{
      a=a+x.price
    })
    return a
  }
  totalitem(){
    let a=0
    for(let i=0 ; this.items.length; i++){
      a=a+i
    }
    return a
  }
}
