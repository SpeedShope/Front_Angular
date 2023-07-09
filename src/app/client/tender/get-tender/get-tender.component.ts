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
  productUrl!: string;

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
  filterTenders() {
    this.tenderService.filterTenders(this.name, this.description, this.brand)
      .subscribe(tenders => this.tenders = tenders);
  }
  search(): void {
    this.tenders$ = this.tenderService.filterTenders(
      this.searchTerm,
      this.searchTerm,
      this.searchTerm
    );
  }
  getSimilarProducts(): void {
    this.tenderService.getSimilarProducts(this.productUrl)
      .subscribe(
        (products: Tender[]) => {
          this.similarProducts = products;
        },
        (error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des produits similaires.', error);
        }
      );
  }



}
