import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: 'success',
          title: ' Please check Your Mail to recover your password !',
          showConfirmButton: false,
          timer: 2000 // Adjust the time (in milliseconds) the notification should be visible
        });
        this.router1.navigate(['/client/resetpassword/',this.email]);
        
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }
}
