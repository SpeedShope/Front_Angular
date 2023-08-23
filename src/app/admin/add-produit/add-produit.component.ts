import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../models/product';
import { ProductService } from '../../_services/product.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})

export class AddProduitComponent implements OnInit{
  productFormGroup!: FormGroup;
  selectedFile!: File;
  idCategory!:number;
  product:Product=new Product();
  image! : File;
  constructor( private productService:ProductService,private router: Router, private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute ) {

    this.productFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      minStock: [null, Validators.required],
      description: ['', Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      image: ['', Validators.required]
    });
}

  ngOnInit(): void {

    this.idCategory=this.activatedRoute.snapshot.params['id']
    console.log(this.idCategory)
  }



  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  /*onSubmit(){

    this.productService.save(this.Produit.name, this.Produit.price, this.Produit.qte, this.Produit.description, this.Produit.minStock,1, this.Produit.image)
      .subscribe(() => {
        console.log(this.Produit.name);
        console.log('Product saved');
      });
  }

   */
  ajouter() {
  
    this.productService.addAvecImage(this.product,this.image)
      .subscribe((res:any) => this.router.navigateByUrl("/get-tender"));
}
onImageSelected(event: any) {
   this.image = event.target.files[0];
  // faire quelque chose avec le fichier sélectionné
}
  add_Product(){
    const formData = new FormData();
    formData.append('name', this.product.name);
    // @ts-ignore
    formData.append('price', this.product.price);
    // @ts-ignore
    formData.append('qte', this.product.qte);
    formData.append('description', this.product.description);
    // @ts-ignore
    formData.append('minStock', this.product.minStock);
    formData.append('file', this.selectedFile);
    this.productService.PostProduct(formData,this.idCategory).subscribe(
      response => {
        console.log('Form submitted successfully');
      },
      error => {
        alert("ajouter avec success");
        //this.router.navigateByUrl("/listProductofcategory/"+this.idCategory)
      }

    );
  }
}
