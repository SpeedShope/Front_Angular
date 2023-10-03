import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionServiceService {
  private apiUrl = 'http://localhost:9090/api/mission/AffectOrderToDeliveryAgent';
  private apiUrlmissions = 'http://localhost:9090/api/mission/getAllMissions';
 private apiUrlBillDetail='http://localhost:9090/api/mission/getMissionsbyid'
  constructor(private http:HttpClient) {

   }
   affectOrderToDeliveryAgent(agentId: number, orderId: number) {
    const url = `${this.apiUrl}/${agentId}/${orderId}`;
    return this.http.post(url, null); // Assuming it's a POST request without a request body
  }
  getAllMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlmissions);
  }
  getBillDetails(orderId: number): Observable<any> {
    const url = `${this.apiUrlBillDetail}/${orderId}`; // Replace with your actual API endpoint
    return this.http.get<any>(url);
  }
}
