import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { score } from '../models/operatorscore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
  private addUrl = 'http://localhost:9090/api/comment/add/';
  
  private url = 'http://localhost:9090/api/comment/delete/';
  private url2 = 'http://localhost:9090/api/OperatorScore/assignop/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
  };
  constructor(private http: HttpClient) {}


  addComment(annonce: Comment,id :number): Observable<HttpResponse<any>> {
    return this.http.put<Comment>(this.addUrl+id, annonce,{observe : 'response'});
  }

  addScore(annonce: score,idoperateur: number,idproduct: number): Observable<HttpResponse<any>> {
    return this.http.put<score>(this.url2+idoperateur+'/'+idproduct, annonce,{observe : 'response'});
  }
  

    deleteComment(id: number): Observable<any> {

      return this.http.delete(this.url + id);
}

 
}
