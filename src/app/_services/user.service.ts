import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractService } from './ContractService';

const API_URL = 'http://localhost:9090/api/test/';
interface MyProfile {
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
  username: string;
  address:string;
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
   API_URL = 'http://localhost:9090/api/user/';
   apiUrldelivery='http://localhost:9090/api/user/getusersByroles'
   private apiUrl = 'http://localhost:9090/api/user/getAllUsers';
   private deleteurl = 'http://localhost:9090/api/user/DeleteUser';


  constructor(private http: HttpClient,private ContractService:ContractService) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getMyProfile(): Observable<MyProfile> {
    return this.http.get<MyProfile>(`${this.API_URL}MyProfile`);
  }
  changeUserRole(userId: number): Observable<any> {
    const url = `${this.API_URL}ChangeUserRole/${userId}`;
    
    this.ContractService.getAllContracts().subscribe((Response)=>{
      const contracts = Response.filter(contract => contract.user.id === userId );
      
      for (var contract of contracts) {
        this.ContractService.acceptContract(contract.contractid).subscribe(
          ()=>{
            console.log('Contract accepted successfully', contract.contractid);
          }
        );
      }
    })
    
    return this.http.put(url, {}); // Send an empty body for PUT request
  }
  getAllDeliveries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrldelivery);
  }
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteUserById(id: number): Observable<void> {
    const url = `${this.deleteurl}/${id}`;
    return this.http.delete<void>(url);
  }


  
}