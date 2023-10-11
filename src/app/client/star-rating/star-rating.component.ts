import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number; // Propriété d'entrée pour le score
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Propriété de sortie pour mettre à jour le score

  // Méthode pour mettre à jour le score
  updateRating(newRating: number) {
    this.rating = newRating;
    this.ratingChange.emit(newRating);
  }
}