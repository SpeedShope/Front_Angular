import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    username: "",
    password: ""
  };
  isVerified = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.verifyAccount(username).subscribe({
      next: data => {
        this.isVerified = data.verified;
        console.log(this.isVerified);
          
        if (this.isVerified) {

          this.authService.login(username, password).subscribe({
            next: data => {
              this.storageService.saveUser(data);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.storageService.getUser().roles;
              this.roles.map((i)=>{
                if (i === 'ROLE_ADMIN') {
                  this.isAdmin = true;
                 
                  setTimeout(() => {
                    this.authService.logout();
                    sessionStorage.clear();
                    this.isLoginFailed = true;
                    this.isLoggedIn = false;
                    this.router.navigate(['/admin/login']);
                  }, 3000);
                }
                // For non-admin users
                else if (i != 'ROLE_ADMIN')  {
                  this.isAdmin=false
                  this.isLoginFailed = false;
                  this.isLoggedIn = true;
                  this.router.navigate(['/client/home']);
                  // No need to use setTimeout here for non-admin users.
                }
              })

            },
            error: err => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
            }
          });
        } else {
          this.isLoginFailed = true;
          this.errorMessage = 'Your account is not verified. Please check your email for verification instructions.';
        }
      },
      error: err => {
        this.errorMessage = 'Failed to verify account.';
        this.isLoginFailed = true;
      }
    });
  }
   verifyCode() : void{
    this.router.navigate(['/client/verifyaccount', this.form.username]);
  } 
}
