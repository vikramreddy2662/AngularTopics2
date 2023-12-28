import { Component, Inject, OnInit} from '@angular/core';
import{User}  from './../../../Models/User'
import { UserService } from '../../../Services/user.service';
import { USER_TOKEN } from '../../../app.module';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{


  
selectedUser:User;

constructor(@Inject(USER_TOKEN) private userService:UserService){}

ngOnInit(){

  this.userService.OnShowUserDetailsClicked.subscribe((data:User)=>{
    
    this.selectedUser=data
    console.log(this.selectedUser);
  });
}


}
