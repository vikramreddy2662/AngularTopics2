import { Component, Inject, inject } from '@angular/core';
import { Service } from '../../../Services/SubScribeServices.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  //providers: [Service]//what to provide
})
export class HeroComponent {


  //how to provide
  // constructor(private subService:Service){

  // }

subService=Inject(Service);//we can also use inject method to get instance of a class(dependency) available from angular 14


  OnSubscribe() {

    //let subService = new Service();
    this.subService.OnSubscribeClicked('yearly');


  }

} 