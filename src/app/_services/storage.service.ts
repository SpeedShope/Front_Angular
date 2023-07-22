import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

const USER_KEY = 'auth-user';
const USER_PICTURE_KEY = 'user-picture'; // Key for storing the user's picture URL

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private authService:AuthService) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any, pictureBlob?: Blob|null, callback?: () => void): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  
    if (pictureBlob) {
      // Convert the Blob data to a data URL and save it in the session storage
      this.blobToDataURL(pictureBlob, (dataURL) => {
        window.sessionStorage.setItem(USER_PICTURE_KEY, dataURL);
        if (callback) {
          callback(); // Call the provided callback once the picture data is saved
        }
      });
    } else {
      if (callback) {
        callback(); // Call the provided callback if no picture data is provided
      }
    }
  }
  


  private blobToDataURL(blob: Blob, callback: (dataURL: string) => void) {
    const reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result as string);
    };
    reader.readAsDataURL(blob);
  }


  public getUserPicture():any {
    return window.sessionStorage.getItem(USER_PICTURE_KEY);
  }


  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    const picture = window.sessionStorage.getItem(USER_PICTURE_KEY);
  
    if (user && picture) {
      return JSON.parse(user);

    } else if (user && !picture) {
      // User data is available, but picture data is missing.
      // Fetch the picture using the access token and save it in the session storage.
      const token = JSON.parse(user)['accessToken'];
      const processedToken = token.replace('achref=', '').split(';')[0];
      const username=JSON.parse(user)['profile'].username ;
       this.authService.getImage(processedToken, `${username}.png`).subscribe(
        (res) => {
            this.saveUser(user, res);
            console.log(res);
          
        },
        (err) => {
          console.log('error', err);
          
        }
      );
  
      // Return the user data immediately without waiting for the picture data.
      return JSON.parse(user);
    }
  
    // Return null if user data is not available.
    return null;
  }
  

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
      
    if (user) {
      return true;
    }

    return false;
  }
}
