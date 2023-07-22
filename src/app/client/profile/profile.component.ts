import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
interface MyProfile {
  nom: string;
  prenom: string;
  email: string;
  dateNaissance: string;
  username:string;
  address:string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  imgprofile:String|null=''; 

  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private userService: UserService,private storageService:StorageService,private authService: AuthService, private router: Router) { 
    this.imgprofile=
    this.storageService.getUserPicture(); 
   }


  user: MyProfile = {
    nom: '',
    prenom: '',
    email: '',
    username: '',
    dateNaissance: '',
    address:''
  };
  isLoading = true;
  ngOnInit(): void {
    this.userService.getMyProfile().subscribe(
      user => {
        this.user = user;
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );

    
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/client/profile']);
    }
    else {
      this.router.navigate(['/client/login']);
    }

  }

}
