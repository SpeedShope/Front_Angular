import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { SharedService } from 'src/app/_services/shared.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  constructor(private shared : SharedService){
  }
  user : User = new User()
  
  ngOnInit(): void {
  console.log(this.getUser()+"jhh")
  }

getUser(){
    this.shared.getUserData().subscribe(data=>{
    this.user=data
  });
}
  
  

}
