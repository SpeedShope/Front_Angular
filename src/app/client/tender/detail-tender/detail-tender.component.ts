import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { Comment } from 'src/app/models/comment';
import { tender } from 'src/app/_services/tender.service';
import { CommentService } from 'src/app/_services/comment.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/models/product';
import { score } from 'src/app/models/operatorscore';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-detail-tender',
  templateUrl: './detail-tender.component.html',
  styleUrls: ['./detail-tender.component.css']
})
export class DetailTenderComponent implements OnInit {
  id!:number;
  public tend!: Tender;
  public comment: Comment= new Comment();
  public user: User= new User();
  public operatorScore: score= new score();
  idoperateur!: number;
  idproduct!: number;
  products : Product[] = [];

  public product: Product= new Product();
  constructor(private userService: UserService,private tender: tender,
    private router:Router ,private com:CommentService ,private pro:ProductService,private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.currentRoute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null){
      //update
      
     
      this.tender.getTenderById(this.id).subscribe(
        (object : Tender)=> this.tend=object
      )
      
  
      
  }
  this.userService.getMyProfile().subscribe(

  );

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
          
  setScore(score: number) {
    this.operatorScore.score = score;
  }

          showoffre(idTender: any): void {
            this.pro.getproducttender(idTender).subscribe(
            
             
           
            )}
            addScore(operatorScore: score,idoperateur:number,idproduct:number): void {
              this.com.addScore(operatorScore,idoperateur,idproduct).subscribe( 
              
               
                
              )}


}
