import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {
  resetPassRequest = {
    email: '',
    resetpasswordcode: '',
    password: ''
  };

  successMessage!: string;
  errorMessage!: string;

  constructor(private router1: Router, private route: ActivatedRoute,private authservice: AuthService) { 
   
  }
  ngOnInit(){
    this.getEmailFromUrl();

   }
      getEmailFromUrl() {
        this.route.paramMap.subscribe(params => {
          const email = params.get('email');
          if (email) {
            this.resetPassRequest.email = email;
          } else {
            // Handle the case when there is no email parameter in the URL
          }
        });
      

   }

  onResetPassword() {
    
    this.authservice.resetPassword(this.resetPassRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Mot de passe réinitialisé avec succès!';
        this.errorMessage = '';
        Swal.fire({
          icon: 'success',
          title: ' Password changed Successfully!' , 
          showConfirmButton: false,
          timer: 2000 // Adjust the time (in milliseconds) the notification should be visible
        });
        this.router1.navigate(['/client/login']);

      },
      error => {
        console.log(error);
        if (error.status === 400) {
          this.errorMessage = error.error.message || 'Invalid verification code!';
          Swal.fire({
            icon: 'error',
            title: ' Invalid verification code!',
            showConfirmButton: false,
            timer: 2000 // Adjust the time (in milliseconds) the notification should be visible
          });
         
        } else {
          this.errorMessage = 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
        }
        this.successMessage = '';
      });
    }
  }
