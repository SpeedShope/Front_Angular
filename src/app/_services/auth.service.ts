import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_API = 'http://localhost:9090/api/auth/';

  constructor(private http: HttpClient) { }
  register(nom: string, prenom: string, username: string, email: string, password: string, dateNaissance: Date, roles: string[]): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        nom,
        prenom,
        username,
        email,
        password,
        dateNaissance,
        roles
      },
      httpOptions
    );
  }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

  updateUser(updatedUser: any, password: string) {
    const url = 'http://localhost:9090/api/user/modifieruser?currentPassword=' + password;
    return this.http.put(url, updatedUser);
  }

  forgotPassword(email: string): Observable<any> {
    const body = { email: email };
    return this.http.post(`${this.AUTH_API}forgot-password`, body);
  }


  resetPassword(resetPassRequest: any): Observable<any> {
    return this.http.post(`${this.AUTH_API}reset-password`, resetPassRequest);
  }
}
