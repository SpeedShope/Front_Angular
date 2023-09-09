import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private userData = new Subject<User>();


  setUserData(data: User) {
    this.userData.next(data);
  }

  getUserData(): Observable<User> {
    return this.userData.asObservable();
  }




}
