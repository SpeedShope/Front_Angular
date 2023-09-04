import { Component ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/app/_services/ContractService';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { SignaturePad } from 'angular2-signaturepad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deliveryagent-form',
  templateUrl: './deliveryagent-form.component.html',
  styleUrls: ['./deliveryagent-form.component.css']
})
export class DeliveryagentFormComponent {
 user:{}
 nom :String; 
 id:number;
 prenom:String; 
 isLoading:boolean=true;
 contractduration:number;
 contractdatedeb:Date=new Date(); 
 hasCar: boolean = false;
 workPreference: string ="";
 cin:String="";
 contractData: any;
 acceptedRules:boolean;
 signed: boolean = false;

 carModel: string = ''; // Initialize to empty string
 carType: string = ''; // Initialize to empty string
 @ViewChild(SignaturePad) signaturePad!: SignaturePad;

 signaturePadOptions: Object = {
   'minWidth': 2,
   'canvasWidth': 500,
   'canvasHeight': 200
 };
   constructor(private userService: UserService,private router:Router,private contractService: ContractService,private route: ActivatedRoute) {
  
  }
   clearSignature() {
    this.signed=true;
  }
 ngOnInit() {

  this.route.params.subscribe(params => {
    this.id = params['id'];})
    
  this.userService.getMyProfile().subscribe(
    user => {
      this.user = user;
      this.nom=user.nom;
      this.prenom=user.prenom
      this.isLoading = false;
    },
    error => {
      console.log(error);
      this.isLoading = false;
    } )
  }
  handleSignatureChange() {

    this.signed = true;
  }
  submitForm() {
    
    console.log(this.workPreference); // Log the selected value
    if (this.hasCar) {
      console.log('Car Model:', this.carModel);
      console.log('Car Type:', this.carType);
      console.log('signed',this.signed)
    }
    // Create contractData object with the necessary data
    
   // const radioButton = document.getElementById('myRadioButton'); 
 
   
    this.contractData = {
      contractduration: this.contractduration,
      cin: this.cin,
      hasCar:this.hasCar,
      typeday:this.workPreference,
      carModel:this.carModel,
      carType:this.carType,
      signature:this.signed,
      contractdatedeb:this.contractdatedeb
      // Add other properties as needed
    };

    // Assuming you want to send user.id as userId

    this.contractService.saveContractAndAssignUser(this.contractData, this.id).subscribe(
      (response) => {
        console.log('Contract saved successfully:', response);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your form has been saved',
          showConfirmButton: false,
          timer: 1500
        })

        this.router.navigate(['/', 'home']);
        // Optionally, you can navigate to another page or handle success in some way
      },
      (error) => {
        console.error('Error saving contract:', error);
        // Handle the error or show a message to the user
      }
    );
  }


}
