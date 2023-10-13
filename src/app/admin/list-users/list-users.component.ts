import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users: User[] = []; 
   constructor(private userserv:UserService){

    
  }
  ngOnInit(){
    this.userserv.getUsers().subscribe((Response)=>{
      this.users=Response;
      console.log(this.users);
    })
  }

  deleteUser(id: number): void {
    this.userserv.deleteUserById(id).subscribe(
      () => {
        console.log(`User with ID ${id} deleted successfully`);
        window.location.reload(); // Reload the page

      },
      error => {
        console.error(`Error deleting user: ${error}`);
      }
    );
  }

 

}
