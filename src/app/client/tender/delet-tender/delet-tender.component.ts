import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { tender } from 'src/app/_services/tender.service';

@Component({
  selector: 'app-delet-tender',
  templateUrl: './delet-tender.component.html',
  styleUrls: ['./delet-tender.component.css']
})
export class DeletTenderComponent implements OnInit {

  similarProducts!: Tender[];

  constructor(private tenderService: tender) {}

  ngOnInit(): void {
  }
  getSimilarProducts(productUrl: string): void {
    this.tenderService.getSimilarProducts(productUrl)
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
