import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { tender } from 'src/app/_services/tender.service';


@Component({
  selector: 'app-add-tender',
  templateUrl: './add-tender.component.html',
  styleUrls: ['./add-tender.component.css']
})
export class AddTenderComponent implements OnInit {
  public action!: string;
  public id!: number;
  predictionResponse: string = '';
  staticModel = 'watch_brand_classifier'; // Remplacez par la valeur statique de 'model'
  staticCanSave = false; 
  tender: Tender = new Tender();
  image! : File;
  imageFile!: File;
  constructor(private tenr: tender, private router:Router, private currentRoute: ActivatedRoute) { }
  ngOnInit(): void {

    this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null){
      //update
      
      this.action="update";
      this.tenr.getTenderById(this.id).subscribe(
        (object : Tender)=> this.tender=object
      )
        console.log(this.tender)
        console.log(this.id)
      }else
      { this.action="add";
        this.tender = new Tender();
      }
     
  }
  ajouter() {
  
    this.tenr.addTender(this.tender,this.image)
      .subscribe((res:any) => this.router.navigateByUrl("/get-tender"));
      console.log(this.tender)

}
onImageSelected(event: any) {
   this.image = event.target.files[0];
  // faire quelque chose avec le fichier sélectionné
}
onSubmit() {
  this.tenr.addTender(this.tender, this.image).subscribe(
    tender => console.log(tender),
    error => console.log(error)
  );
}
onPredict(): void {
  this.tenr.predict(this.image, this.staticModel, this.staticCanSave).subscribe((response) => {
    // Update the predictionResponse variable with the response
    this.predictionResponse = response;
    console.log(this.predictionResponse) // Assuming 'brand' is the property you want to display
  });
}






}
