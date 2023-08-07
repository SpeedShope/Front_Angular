import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { Router } from '@angular/router';
import { BillService } from 'src/app/_services/bill.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Bill } from 'src/app/models/bill';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-add-order-popup',
  templateUrl: './add-order-popup.component.html',
  styleUrls: ['./add-order-popup.component.css']
})
export class AddOrderPopupComponent {
   //name = new FormControl('');
   order: Order = new Order()
   bill: Bill = new Bill()
   message={'subjuct':"facture"}
   idbill!:number
 
   private idcmd!: number
   id!:number
   c!: string;
   codePromo!: string
   x!:any
 
   constructor(private orderSerice:OrderService,private router: Router, private billService: BillService,private diag: MatDialogRef<AddOrderPopupComponent>) { }
 
   ngOnInit(): void {
     
   }
   onSubmit(){
     this.saveOrer();
     this.send()
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
           
 
          {console.log(data)},
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
       
       close(){
         this.diag.close()
       }
       
       send(){
         this.billService.getbill().subscribe(data=>{
           const lastElement = data[data.length - 1];
           this.billService.sendEmailWithFacture(lastElement.id).subscribe(object=>{
             console.log(object);
         })
       })  
       }

}
