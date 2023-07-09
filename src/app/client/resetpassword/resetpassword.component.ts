import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

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

  constructor(private router1: Router,private authservice: AuthService) { }

  onResetPassword() {
    this.authservice.resetPassword(this.resetPassRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Mot de passe réinitialisé avec succès!';
        this.errorMessage = '';
        this.router1.navigate(['/client/login']);

      },
      error => {
        console.log(error);
        this.successMessage = '';
        this.errorMessage = error.error.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe.';
      }
    );
  }
}
