import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contract } from '../models/contracts';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private baseUrl = 'http://localhost:9090/api/contracts/';
  private apiUrl = 'http://localhost:9090/api/contracts/getAllContracts';
private contractsUrl='http://localhost:9090/api/contracts/getcontractByid';
  constructor(private http: HttpClient) { }

  // This method sends a POST request to the API endpoint
  // to save a contract and assign it to a user.
  saveContractAndAssignUser(contract: any, userId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}saveContractAndAssignUser/${userId}`, contract);
  }
  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.apiUrl);
  }

  getContractDetails(contractId: number): Observable<any> {
    return this.http.get<any>(`${this.contractsUrl}/${contractId}`);
  }
  acceptContract(ContractId:number):Observable<any>{
    return this.http.put(`${this.baseUrl}acceptContract/${ContractId}`, {});
  }
}
