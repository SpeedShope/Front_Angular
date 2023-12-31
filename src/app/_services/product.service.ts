import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:9090/api/product"
  private apiC ='http://localhost:9090/api/category/getAll';
  private url="http://localhost:9090/api/product/showAll";
  constructor(private http:HttpClient) { }


  getProducts(): Observable<any> {

    return this.http.get<any>(this.apiUrl+'/showAll',);
  }
  getAllCategory():Observable<any>{
    return this.http.get<any>(this.apiC,);

}

  getProductsByCategory(keyword:string):Observable<any>{
    return this.http.get<any>(this.apiUrl+'/productsOfCategory/'+keyword,);
}
  PostProduct(formData: FormData,idCategory:number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post('http://localhost:9090/api/product/ajouterProduit/'+idCategory, formData, {headers});

  }
  PostProducttender(formData: FormData,idtender:number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(' http://localhost:9090/api/product/provideTender/'+idtender, formData, {headers});

  }
  deleteProduit(idProduct:number): Observable<void> {

    return this.http.delete<void>(this.apiUrl+"/delete/" +idProduct)

  }
  getProductofcateg(idtender:number): Observable<any> {

    return this.http.get<any>("http://localhost:9090/api/product/showAll/"+idtender);
  }
  getProduct(idProduct:number): Observable<any> {

    return this.http.get<any>("http://localhost:9090/api/product/showproduct/"+idProduct);
  }
  getProductOffournisseur(): Observable<any> {
    return  this.http.get<any>("http://localhost:9090/api/product/userProducts");

  }
  addAvecImage(tender: Product, image: File): Observable<Product> {
    const formData: FormData = new FormData();
    formData.append('tender', JSON.stringify(tender));
    formData.append('image', image);
  
    return this.http.post<Product>(`${this.apiUrl}/add_image`, formData);
  }
  getproducttender(id:number):Observable<Product[]>{
    return this.http.get<Product[]>(this.url+'/' + id)
    }

}
