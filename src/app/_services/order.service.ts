import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { Bill } from '../models/bill';
import { Product } from '../models/product';


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


  addOrder(order : Order,products : Product[],bill : Bill):Observable<Order>{
    let formData = new FormData();
    const annonceBlob = new Blob([JSON.stringify(products)], { type: 'application/json' });
formData.append('order',JSON.stringify(order));
formData.append('products', JSON.stringify(products));
formData.append('bill', JSON.stringify(bill));

const headers = new HttpHeaders({
  'Content-Type':'multipart/form-data'
});

    return this.http.post<Order>(`${this.urll}`,formData, {headers})
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
