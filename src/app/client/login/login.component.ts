import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

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
              this.router.navigate(['/client/home']);
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
