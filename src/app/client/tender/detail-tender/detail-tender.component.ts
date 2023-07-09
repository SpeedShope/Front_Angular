import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { Comment } from 'src/app/models/comment';
import { tender } from 'src/app/_services/tender.service';
import { CommentService } from 'src/app/_services/comment.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-detail-tender',
  templateUrl: './detail-tender.component.html',
  styleUrls: ['./detail-tender.component.css']
})
export class DetailTenderComponent implements OnInit {
  id!:number;
  public tend!: Tender;
  public comment: Comment= new Comment();
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
  }

}
onSubmit(){this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
      //update
      
      

      this.com.addComment(this.comment,this.id).subscribe(()=>{ 
        
        this.router.navigate(['/detailtender',this.id])
        this.refresh()
      }

     
      )
      
      console.log("ngfn",this.comment);
    

      }
      refresh(): void {
        window.location.reload();
      }
      deletetender(idTender: any): void {
        this.tender.deleteTender(idTender).subscribe(
        
          
           
         
         
        
        )}
        delete(idComment: any): void {
          this.com.deleteComment(idComment).subscribe(()=>{ 
          
           
            this.refresh()}
          )}

}
