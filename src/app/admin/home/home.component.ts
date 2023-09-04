import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username?: string;
  isLoggedIn = false;
 profilePictureUrl:String;
 roles:[];
 priv_Deliv_agent:boolean=false; 


  constructor(private storageService: StorageService, private authService: AuthService,private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn =await this.storageService.isLoggedIn();
    const user = await this.storageService.getUser();
    this.roles = this.storageService.getUser().roles;
    this.roles.map((i)=>{
      if(i=="ROLE_DELIVERY"){
           this.priv_Deliv_agent=true;
      }
    })
    if (this.isLoggedIn===true) {
      console.log(this.username)
      this.username = user.username;
      this.profilePictureUrl = await this.storageService.getUserPicture();
    }
    
    
    setTimeout(()=>{
      this.isLoggedIn = this.storageService.isLoggedIn();
        console.log(this.username)
        this.profilePictureUrl = this.storageService.getUserPicture();
      
    },2000
  
    )
     
    }
    
  async getUserPicture(){
    this.profilePictureUrl = await this.storageService.getUserPicture(); // Get the data URL of the profile pictur
  }
  

  async cleanProfileImg():Promise<void>{
    await window.sessionStorage.setItem("user-picture", '');

  }
 async logout():Promise<any>  {
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
}
