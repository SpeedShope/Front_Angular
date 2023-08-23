import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  API_URL = 'http://localhost:9090/api/category';
    constructor(private http:HttpClient) { }
  ajout(ca: Category):Observable<Category> {
   
    return this.http.post<Category>('http://localhost:9090/api/category/saveCategorie' , ca);
  }
  getCategoryUser():Observable<Category[]>{
    return this.http.get<Category[]>(this.API_URL+'/getAll');
  }
}
