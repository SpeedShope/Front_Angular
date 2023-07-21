import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username?: string;
  isLoggedIn = false;
  profilePictureUrl : string |null ='';
 
  constructor(private storageService: StorageService, private authService: AuthService,private router: Router) { }

async ngOnInit(): Promise<void> {
  setTimeout(()=>{
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user =  this.storageService.getUser();
      this.username = user.username;
      this.profilePictureUrl = this.storageService.getUserPicture();
    }
  },3000

  )
   
  }

  getUserPicture(){
    this.profilePictureUrl = this.storageService.getUserPicture(); // Get the data URL of the profile pictur
  }
  

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['/client/login']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  
  Login():void{
    this.router.navigate(['/client/login']);
  }

}
