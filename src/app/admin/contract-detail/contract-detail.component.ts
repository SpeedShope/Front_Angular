import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/app/_services/ContractService';
import { Location } from '@angular/common'; // Import the Location service

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent {
  contractId: number;
  contractDetails: any; // Define the contract details object based on your data structure

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService ,// Inject your contract service
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('idddd',this.contractId)
    this.route.params.subscribe((params) => {
      this.contractId = +params['id']; // Get the contract ID from the route parameter

      // Retrieve contract details based on the contractId using your contract service
      this.contractService.getContractDetails(this.contractId).subscribe((details) => {
        this.contractDetails = details;
      });
    });
  }
  goBack(): void {
    this.location.back(); // Navigate back to the previous page
  }
}
