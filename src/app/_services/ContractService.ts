import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl = 'http://localhost:9090/api/contracts/';

  constructor(private http: HttpClient) { }

  // This method sends a POST request to the API endpoint
  // to save a contract and assign it to a user.
  saveContractAndAssignUser(contract: any, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}saveContractAndAssignUser/${userId}`, contract);
  }
}
