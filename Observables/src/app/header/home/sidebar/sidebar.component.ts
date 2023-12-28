import { Component } from '@angular/core';
import { Service } from '../../../Services/SubScribeServices.service' ;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
 // providers:[Service]//using providers angular get to know what intance to be provided 
})
export class SidebarComponent {

  constructor(private subService:Service){}//using constructor how to provide that instance.
 
  OnSubscribe(){

//let subService=new Service();
    this.subService.OnSubscribeClicked('daily');
/* Dependency Injection: Adding instances of a service class into component class on which that component class relies on */

  }

}