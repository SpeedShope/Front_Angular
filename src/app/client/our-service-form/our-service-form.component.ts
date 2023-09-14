import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/_services/ContractService';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-our-service-form',
  templateUrl: './our-service-form.component.html',
  styleUrls: ['./our-service-form.component.css']
})
export class OurServiceFormComponent {
  user:{}; 

  id:number
  isLoading:boolean=true;

  constructor(private userService: UserService,storageservice: StorageService, private router: Router, private ContractServ:ContractService) {
  
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
  Submit():any{
    this.ContractServ.getUserContracts(this.id).subscribe(
      (contracts) => {
        if (contracts.length > 0) { // Check if contracts exist
          Swal.fire({
            icon: 'success',
            title: 'You have already filled this form',
            text: 'You can add your custom message here if needed.',
          });
        } else {
          // User doesn't have contracts, proceed with your logic
          // You can add your logic here to navigate to the contract form
          this.router.navigate(['/client/contractForm/', this.id]);
        }
      },
      (error) => {
        console.error(error);
        // Handle error if necessary
      }
    );
  }



}
