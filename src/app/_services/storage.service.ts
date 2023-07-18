import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const USER_PICTURE_KEY = 'user-picture'; // Key for storing the user's picture URL

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any, pictureUrl?: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    
    if (pictureUrl) {
      window.sessionStorage.setItem(USER_PICTURE_KEY, pictureUrl); // Save the picture URL if provided
    }
  }

  public getUserPicture(): string | null {
    return window.sessionStorage.getItem(USER_PICTURE_KEY);
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
