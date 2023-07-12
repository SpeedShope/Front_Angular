import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent {
  username: string = '';
  OTPmsg:string=""; 
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  code5: string = '';
  code6: string = '';
  enteredCode: string = '';
  isVerified: boolean = false;

  constructor(private authService: AuthService, private router :Router, private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
  }

  onCodeChange(): void {
    this.enteredCode = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6;
  }

  verifyOTP(): void {
    console.log('hello');
    this.authService.verifyAccount(this.username).subscribe({
      next: (data) => {
        if (data.verificationCode === this.enteredCode) {
          this.authService.ValidateOTP(this.username).subscribe({
            next: (data) => {
              console.log(data);
              this.router.navigate(['/client/login']);
            },
            error: (err) => {
              console.log(err);
            }
          })
          this.isVerified = true;
          
          this.OTPmsg="Account Verified";
        } else {
          this.isVerified = false;
          this.OTPmsg="Invalid OTP";

        }
      },
      error: (err) => {
        console.log("Error occurred during OTP verification:", err);
      }
    });
  }
}
