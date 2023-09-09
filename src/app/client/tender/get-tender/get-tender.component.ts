import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { tender } from 'src/app/_services/tender.service';
import { Comment } from 'src/app/models/comment';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-tender',
  templateUrl: './get-tender.component.html',
  styleUrls: ['./get-tender.component.css']
})
export class GetTenderComponent implements OnInit {
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

  constructor( private tenderService: tender) { }

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

  getSimilarProducts() {
    this.tenderService.getSimilarProducts(this.productUrl)
      .subscribe(
        (response) => {
          this.similarProducts = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  get totalPages(): number {
    return Math.ceil(this.tenders.length / this.itemsPerPage);
  }
  
  // Méthodes
  get pagedTenders(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tenders.slice(startIndex, endIndex);
  }
  
  changePage(page: number) {
    this.currentPage = page;
  }
  filterTenders() {
    this.tenderService.filterTenders(this.nom, this.description, this.marque)
      .subscribe(
        (response) => {
          this.filteredTenders = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  



}
