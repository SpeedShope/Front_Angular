import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent {
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
      this.router.navigate(['/admin/updateadmin']);
    }
    else {
      this.router.navigate(['/admin/login']);
    }
  }

  onSubmit() {
    this.authservice.updateUser(this.updatedUser, this.password)
      .subscribe(
        res=> (this.router.navigate(['/admin/profileadmin'])    )  );
  }


  logout(): void {
    this.authservice.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['/admin/login']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
