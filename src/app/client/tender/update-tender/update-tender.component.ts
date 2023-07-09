import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { Comment } from 'src/app/models/comment';
import { tender } from 'src/app/_services/tender.service';
import { CommentService } from 'src/app/_services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tender',
  templateUrl: './update-tender.component.html',
  styleUrls: ['./update-tender.component.css']
})
export class UpdateTenderComponent implements OnInit {


  id!:number;
  public tend!: Tender;
  public comment: Comment= new Comment();
image!:File;
  constructor(private tender: tender,
    private router:Router ,private com:CommentService ,private currentRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null){
      //update
      
     
      this.tender.getTenderById(this.id).subscribe(
        (object : Tender)=> this.tend=object
      )
  }}
  update() {
    // Récupérer l'ID de l'annonce à modifier
    const idAnnonce = this.tend.id;
    
    // Appeler la fonction de modification d'annonce du service
    this.tender.updateDelivery(this.tend,idAnnonce).subscribe(
      (data) => {
        console.log('Annonce modifiée avec succès');
        console.log(data);
        // Rediriger l'utilisateur vers la page de liste des annonces
        this.router.navigate(['/annonces']);
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'annonce', error);
      }
    )
  }
  onImageSelected(event: any) {
    this.image = event.target.files[0];
   // faire quelque chose avec le fichier sélectionné
 }


}
