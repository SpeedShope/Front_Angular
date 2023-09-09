import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/models/order';

@Injectable({
  providedIn: 'root'
})
export class ShareddService {
  private userData = new Subject<Order[]>();

  constructor() { }

  setUserData(data: Order[]) {
    this.userData.next(data);
  }

  getUserData(): Observable<Order[]> {
    return this.userData.asObservable();
  }


}
