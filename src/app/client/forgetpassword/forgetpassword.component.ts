import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  email!: string;
  message!: string;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private router1: Router,private authService: AuthService,
  ) {}

  ngOnInit(): void {
    
  }

  submit() {
    this.authService.forgotPassword(this.email).subscribe(
      (data) => {
        this.message = data.message;
        this.router1.navigate(['/client/resetpassword']);

      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }
}
