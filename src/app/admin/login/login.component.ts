import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  profilePictureUrl:String='';
  form: any = {
    username: "",
    password: ""
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) { }

   ngOnInit(){
  
     
    }

  onSubmit(): void {
   // console.log("hh")
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
            
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
      
        this.roles.map((i)=>{
          if ((i != 'ROLE_ADMIN') && (i !='ROLE_DELIVERY')) {
          this.logout();
            this.isLoginFailed = true;
            this.isLoggedIn = false;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You are not an admin!',
              footer: '<a href>Why do I have this issue?</a>'
            })

          }else{
            
            this.router.navigate(['/admin/home'])

          }
        })
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }


  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        this.router.navigate(['/client/login']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
