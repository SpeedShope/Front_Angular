import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  form: any = {
    nom: null,
    prenom: null,
    username: null,
    email: null,
    password: null,
    dateNaissance: null,
    roles: [] 
  };
  roles: string[] = [];

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(private storageService:StorageService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   /* if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = false;
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/signup']);
    }*/
  }

  onSubmit(): void {
    const { nom, prenom, username, email, password, dateNaissance, roles } = this.form;
  
    console.log('Form data before sending:', this.form); // Ajouté
  
    if (roles.length === 0) {
      this.errorMessage = 'Veuillez sélectionner au moins un rôle';
      this.isSignUpFailed = true;
      return;
    }
  
    this.authService
      .register(nom, prenom, username, email, password, dateNaissance, roles)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['/client/login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
  }

  onRoleChange(event: any): void {
    const role = event.target.value;
    console.log('Role change:', role, event.target.checked); // Ajouté
  
    if (event.target.checked) {
      this.form.roles.push(role);
    } else {
      this.form.roles = this.form.roles.filter((r: string) => r !== role);
    }
    console.log('Roles after change:', this.form.roles); // Ajouté
  }

}
