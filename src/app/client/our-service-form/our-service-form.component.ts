import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-our-service-form',
  templateUrl: './our-service-form.component.html',
  styleUrls: ['./our-service-form.component.css']
})
export class OurServiceFormComponent {
  user:{}; 

  id:number
  isLoading:boolean=true;

  constructor(private userService: UserService,storageservice: StorageService, router: Router) {
  
   }
 ngOnInit() {
  this.userService.getMyProfile().subscribe(
    user => {
      this.user = user;
      this.id=user.id;

      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    } )
  }

}
