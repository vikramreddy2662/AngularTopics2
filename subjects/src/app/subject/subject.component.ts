import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import{ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

/*
Observable is unicast and subject is multi cast observable sometimes pass the different data to its observers 
but subjects pass the same data  to all its observers 
observable=>UNICAST
Subject=>MULTICAST
Observable always acts as a data emmitter 
Subject acts as a data emmitter and data consumer.
*/

ngOnInit(){


 

//  let  obst=new Observable((observer)=>{
 
//     observer.next(Math.random)

//   })

// obs.subscribe({
//   next:(data)=>{

//   console.log(data);
// }})


//using alone subjects we cannot emit intial values
//using behavior subject we can intialize  values to it to pass intial  to its subscribes before data is not emmiitted from subject

const subject=new BehaviorSubject<number>(100);


subject.subscribe({
  next:(data)=>{

  console.log(data);
}})
subject.subscribe({
  next:(data)=>{

  console.log(data);
}})

subject.next(Math.random())

subject.subscribe((data)=>console.log(data));
}


//here we are  using randomuserApi url and sending a request from our application to random user api
//ajax is an observable  


// const subject=new Subject();

// let observable=ajax('https://randomuser.me/api/');


// subject.subscribe((res)=>console.log(res));
// subject.subscribe((res)=>console.log(res));
// subject.subscribe((res)=>console.log(res));

// observable.subscribe(subject);

/*here subject acts as a data observer and data emmitter 
the get request is sent to the api and the reposnse is observed by the subject from 
observable and the same response is sent to all its subscribers.
request is sent only once and the reponse is emmitted to all its subscribers at once.

DIFFERENCE IS THAT REQUEST IS MADE 3 TIMES USING OBSERVABLE USING SUBJECT AS A EMMITTER AND OBSERVER REQUEST IS MADE ONLY ONE TIME AND 
DATA IS EMMITTED AT ONCE TO ALL ITS SUBSCRIBERS
*/

}
