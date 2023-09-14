import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tender } from '../models/tender';
import { HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class tender {
  private apiUrl = 'http://localhost:9090/api/tender/all'; 
  private addUrl = 'http://localhost:9090/api/tender';
  private urlGet = 'http://localhost:9090/api/tender/get/';
  private url = 'http://localhost:9090/api/tender/delete';
  private baseUrl = 'http://localhost:9090/api/tender';
 
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  };
  constructor(private http: HttpClient) {}

  getTenderList(): Observable<Tender[]> {
    return this.http.get<Tender[]>(this.apiUrl);
  }

  addTender(annonce: Tender,file :File): Observable<Tender> {
    let form : FormData = new FormData();

    const annonceBlob = new Blob([JSON.stringify(annonce)], { type: 'application/json' });


    form.append('tender',annonceBlob);
    
    form.append('image',file);
    console.log(annonceBlob)
    return this.http.post<Tender>(this.addUrl+"/add_image", form);
  }
  getTenderById(id: number) {
    const headers = new HttpHeaders();

      
    return this.http.get<Tender>(this.urlGet+id, { "headers": headers })
  }

  

    deleteTender(id: number): Observable<any> {

      return this.http.delete(this.url+'/' + id);
}
filterTenders(name: string, description: string, brand: string): Observable<Tender[]> {
  const url = `${this.baseUrl}/filter?name=${name}&description=${description}&brand=${brand}`;
  return this.http.get<Tender[]>(url);
}
addAvecImage(tender: Tender, image: File): Observable<Tender> {
  const formData: FormData = new FormData();
  formData.append('tender', JSON.stringify(tender));
  formData.append('image', image);

  return this.http.post<Tender>(`${this.baseUrl}/add_image`, formData);
}

updateDelivery( tender: Tender,  id: any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  return this.http.put(`${this.baseUrl}/update/${id}`, JSON.stringify(tender), httpOptions);
}
getSimilarProducts(productUrl: string): Observable<Tender[]> {
  const url = `${this.baseUrl}/similar?url=${productUrl}`;
  return this.http.get<Tender[]>(url);
}
deleteTender1(id: number): Observable<any> {

  return this.http.delete(this.url+'admin/' + id);
}


}