import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent {
  @ViewChildren('codeInputs') codeInputs: QueryList<ElementRef>;

  username: string = '';
  OTPmsg:string=""; 
  code1: string = '';
  code2: string = '';
  code3: string = '';
  code4: string = '';
  code5: string = '';
  code6: string = '';
  enteredCode: string ;
  isVerified: boolean = false;

  constructor(private authService: AuthService, private router :Router, private route: ActivatedRoute) {
    this.username = this.route.snapshot.params['username'];
    this.enteredCode='';

  }

  onCodeInput(index: number) {
   
    if (index < this.codeInputs.length - 1) {
      const nextInput = this.codeInputs.toArray()[index + 1].nativeElement;
      nextInput.focus();
    }
    this.updateEnteredCode();
   
  }
  private updateEnteredCode() {
    const enteredCodeArray = [this.code1, this.code2, this.code3, this.code4, this.code5, this.code6];
    this.enteredCode = enteredCodeArray.join('');
  }

  verifyOTP(): void {
    console.log('hello');
    this.authService.verifyAccount(this.username).subscribe({
      next: (data) => {
        if (data.verificationCode === this.enteredCode) {
          this.authService.ValidateOTP(this.username).subscribe({
            next: (data) => {

              Swal.fire({
                icon: 'success',
                title: ' Account verified Successfully ',
                showConfirmButton: false,
                timer: 2000 // Adjust the time (in milliseconds) the notification should be visible
              });
              

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

  OTPRESEND():void{
    this.codeInputs.toArray().map((i)=>{
      i.nativeElement.value='';
    })
    console.log(this.username);
    this.authService.resendOTP(this.username).subscribe({
      next: (data) => {
        console.log(data);
        this.OTPmsg="OTP Sent Successfully";
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
