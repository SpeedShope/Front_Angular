import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { Order } from '../../models/order';
import { Bill } from '../../models/bill';
import { AddToCardService } from '../../_services/add-to-card.service';
import { OrderService } from '../../_services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BillService } from '../../_services/bill.service';
import { AddOrderPopupComponent } from '../add-order-popup/add-order-popup.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent {
  products: Product[]=[]
  public items:Product[]=[];
  i: number=0;
  order: Order = new Order()
  bill: Bill = new Bill()
  idbill!:number
  c!: string;
  codePromo!: string
  sum=0
  private idcmd!: number
  constructor(public cart : AddToCardService, private orderSerice:OrderService,
    private billService: BillService,private diag: MatDialog, private router : Router ) { }
 

  ngOnInit(): void {
    this.products = this.cart.getItems();
    this.sum=this.cart.calculsomme()
  }

  clear(){
    this.products=this.cart.clearCart()
  }
  versroute(){
this.router.navigate(['/client/home'])
  }
  
  
  delete(){
    this.cart.deleteCard(this.i)
  }
  onSubmit(){
    this.saveOrer();
      }
      saveOrer(){
    this.orderSerice.addOrder(this.order).subscribe(data=>
      {
    
        this.idcmd=data.id
        this.c=data.code
        console.log(data);
    this.goToHome();
    this.getCode().subscribe(data=>
      {
        this.codePromo=data
        if(this.codePromo!=this.c){
          this.add(this.bill, this.idcmd)
        }
        else{
          this.addd(this.bill,this.idcmd,this.c)
          
        }
      }
      )
      }, error=> console.log(error)
      
      )
   
      }
    
      goToHome(){
        this.router.navigate(['/order'])
      }
    
      add(bil :Bill, id: number){
        this.billService.addbill(bil,id).subscribe(data=>
          
         {
          console.log(data)
        },
        error=>console.log(error)
          )
         
      }
      addd(bil :Bill, id: number,codePromo:string){
        this.billService.addbillWithCodePromo(bil,id,codePromo).subscribe(data=>
          {console.log(data)},
          error=>console.log(error)
          )
         
      }
      getCode():Observable<string>{
       return this.billService.getCodePromo();
      }

      open(){
        this.diag.open(AddOrderPopupComponent)
      }




}