import { Component, Inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import {USER_TOKEN} from './../../app.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  providers:[UserService]
})
export class AdminComponent {

constructor(@Inject(USER_TOKEN) private userService:UserService){}


name:string=' ';
gender:string='male';
subType:string='yearly';
status:string='active';

CreateNewUser(){

  this.userService.createUser(this.name,this.gender,this.subType,this.status);
  console.log(this.userService.users);
  

}



}
