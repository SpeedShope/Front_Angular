import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrderService } from 'src/app/_services/order.service';
import { SharedService } from 'src/app/_services/shared.service';
import { ShareddService } from 'src/app/_services/sharedd.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[]=[]
  searchText=""
  selectedClient=0
  p: number = 1
  count : number = 5 
  constructor(private order: OrderService, private router: Router ,private sharedd : ShareddService,
     private shared : SharedService){}
  ngOnInit(): void {
    this.getOrder()
    
       
  }

getOrder(){
return this.order.getOrder().subscribe(data=>
  {
    this.orders=data
    this.sharedd.setUserData(data)
    console.log(data)
  }
  )
}
delteOrder(idOrder : number){
  this.order.deleteOrder(idOrder).subscribe(data=>{
    console.log(data)
    location.reload();
  }, error=>console.log(error)
  )
}
selectedOrder: any ;
orderr!: Order
selectRow(order: Order) {
  this.selectedOrder = order;
  return this.selectedOrder
}
getUserById(id:number){
  let user: User
this.order.getUser(id).subscribe(data=>{
  user= data as User
  this.shared.setUserData(user)
  console.log(data)
})


}



}