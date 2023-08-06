import { Component } from '@angular/core';
import { Category } from '../../../models/category';
import { CategoryserviceService } from '../../../_services/categoryservice.service'

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  category:Category=new Category();
  constructor(private categoryservice:CategoryserviceService){}
ngOnInit():void{
}


 
onSubmit(){
    this.categoryservice.ajout(this.category).subscribe(
      (response: any) => {
        console.log(response);
        // gérer la réponse ici
      },
      (error: any) => {
        console.log(error);
        // gérer l'erreur ici
      }
    );
    
  }


}
