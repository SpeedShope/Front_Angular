import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';

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
  this.isLoggedIn =await this.storageService.isLoggedIn();
  const user = await this.storageService.getUser();

  if (this.isLoggedIn===true) {
    console.log(this.username)
    this.username = user.username;
    this.profilePictureUrl = await this.storageService.getUserPicture();
  }
  
  
  setTimeout(()=>{
    this.isLoggedIn = this.storageService.isLoggedIn();
      console.log(this.username)
      this.profilePictureUrl = this.storageService.getUserPicture();
    
  },5000

  )
   
  }

  async getUserPicture(){
    this.profilePictureUrl = await this.storageService.getUserPicture(); // Get the data URL of the profile pictur
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
