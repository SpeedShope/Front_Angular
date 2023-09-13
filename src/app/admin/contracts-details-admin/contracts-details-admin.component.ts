import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/_services/ContractService';
import { UserService } from 'src/app/_services/user.service';
import { Contract } from 'src/app/models/contracts';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contracts-details-admin',
  templateUrl: './contracts-details-admin.component.html',
  styleUrls: ['./contracts-details-admin.component.css']
})
export class ContractsDetailsAdminComponent {

  contracts: Contract[] = [];
  constructor(private userService:UserService, private contractService: ContractService,private router:Router,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.contractService.getAllContracts().subscribe((contracts) => {
      // Filter out the accepted contracts
      this.contracts = contracts.filter(contract => !contract.acceptstatus );
    });
  }

  acceptContract(contract: Contract) {
    if (!contract.signature) {
      // Show an alert indicating the contract is not signed
      Swal.fire({
        icon: 'error',
        title: 'Contract not signed',
        text: 'This contract cannot be accepted because it is not signed.',
      });
    } else {
      const userId = contract.user.id; // Replace with the desired user ID
      this.userService.changeUserRole(userId).subscribe(
        (response) => {
          // Remove the accepted contract from the list
          this.contracts = this.contracts.filter((c) => c !== contract);
  
          Swal.fire({
            icon: 'success',
            title: 'User role changed successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error('Error changing user role', error);
          // Handle error here
        }
      );
    }
  }
  

  refuseContract(){

  }

}
