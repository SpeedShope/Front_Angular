import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  updatedUser = {
    nom: '',
    prenom: '',
    address: '',
    numTel:'',
    email: '',
  };password = '';


  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private authservice: AuthService,private storageService:StorageService, private router: Router) { }

  ngOnInit(): void {
    
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/client/updateuser']);
    }
    else {
      this.router.navigate(['/client/login']);
    }
  }

  onSubmit() {
    this.authservice.updateUser(this.updatedUser, this.password)
      .subscribe(
        res=> (this.router.navigate(['/client/profile'])    )  );
  }
}
