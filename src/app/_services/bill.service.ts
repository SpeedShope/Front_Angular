import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';
import { StatistiquesFactures } from '../models/StatistiquesFactures';

@Injectable({
  providedIn: 'root'
})
export class BillService {
// private url="http://localhost:9090/bill/add"
private url2="http://localhost:9090/mail/send-email/"
//id=45
message={'subjuct':"facture"}

 constructor(private http: HttpClient) { }
/*get():number{
 return this.order.getIdCmd()
}*/
 addbill(bill :Bill,id:number){
return this.http.post("http://localhost:9090/api/bill/add/"+id,bill)
 }
 addbillWithCodePromo(bill :Bill,id:number,codePromo:string){
   return this.http.post("http://localhost:9090/api/bill/add/"+id+"/"+codePromo,bill)
     }
   getCodePromo():Observable<any>{
     return this.http.get("http://localhost:9090/api/bill/code-promo",{
       responseType: 'text'
     })
   }
   sendEmailWithFacture(id:number){
   
     return this.http.post('http://localhost:9090/mail/send-email/'+id,this.message);
 

   }
   sendEmail(message:string){
     return this.http.post("http://localhost:9090/mail/send-email",message)
   }
   getbill():Observable<Bill[]>{
     return this.http.get<Bill[]>("http://localhost:9090/api/bill/bil")

   }
   
   getStat():Observable<StatistiquesFactures>{
    return this.http.get<StatistiquesFactures>('http://localhost:9090/api/bill/statistiques')
   }
}
