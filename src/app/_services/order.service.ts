import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { Bill } from '../models/bill';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url ="http://localhost:9090/api/order/orders";
  private urll="http://localhost:9090/api/order/add";
  private u="http://localhost:9090/bill/add"
  constructor(private http : HttpClient) { }
  getOrder(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}`)
  }


  addOrder(order : Order):Observable<Order>{


    return this.http.post<Order>(`${this.urll}`,order)
  }
  deleteOrder(id:number){
    return this.http.delete("http://localhost:9090/api/order/delete/"+id)

  }
  addbill(bill :Bill){
    return this.http.post(`${this.u}`,bill)
      }

      getUser(id : number){
        return this.http.get("http://localhost:9090/api/order/getUser/"+id)
      }
    
}
