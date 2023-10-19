import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tender } from 'src/app/_services/tender.service';
import { ProductService } from 'src/app/_services/product.service';
import { Tender } from 'src/app/models/tender';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtender',
  templateUrl: './listtender.component.html',
  styleUrls: ['./listtender.component.css']
})
export class ListtenderComponent implements OnInit  {
  comments : Comment[] = [];
  name!: string;
  description!: string;
  brand!: string;
  searchTerm: string = '';
  tenders$!: Observable<Tender[]>;
  tenders: Tender[] = [];
  similarProducts!: Tender[];
  productUrl!: any;
  currentPage: number = 1;
  itemsPerPage: number = 6; 
  nom: string = '';
  searchText = '';
  marque: string = '';
  filteredTenders: any[] = [];
  public tend!: Tender;
  constructor( private tenderService: tender,private pro:ProductService,private router:Router) { }
 

  ngOnInit() {
    this.getTenders();
  }
  getTenders() {
    this.tenderService.getTenderList().subscribe(
      (response: Tender[]) => {
        this.tenders = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deletetender(idTender: any): void {
    this.tenderService.deleteTender(idTender).subscribe(
    
      
       
     
     
    
    )}
    getSimilarProducts() {
      this.tenderService.getSimilarProducts(this.productUrl)
        .subscribe(
          tenders => {
            this.tenders = tenders;
          },
          error => {
            console.log(error);
          }
        );
    }
    deletetender1(idTender: any): void {
      this.tenderService.deleteTender1(idTender).subscribe(
      
        
         
       
       
      
      )}
     
      showoffre(idTender: any): void {
        this.pro.getproducttender(idTender).subscribe(
        
         
       
        )}
        ProductsOfCategoryRoute(id:number){
          this.router.navigateByUrl("/admin/listProducttender/"+id)
        }
        addProductRoute(id:number){
          this.router.navigateByUrl("/admin/addProducttender/"+id)
        }
      


}


