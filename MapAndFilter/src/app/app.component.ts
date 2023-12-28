import { Component } from '@angular/core';
import { from } from 'rxjs';
import { map ,filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MapAndFilter';


  data: any[] = [];

  array1 = [12, 32, 45, 67, 87, 90];


  myObservable = from(this.array1).pipe(map((val) => {


    return val * 5  }),

    filter((val) => {
   
      return val%4==0;
   
     }
    ));;
    /*here instead of performing both filter and map methods seperately we can use the pipe method to perform directly with the 
    observable creation */




//map is used to convert the data emmitted from the observable into some way based on our requirements.
//filter is used to filter the data emmitted from the observable  based on  some condition.
//pipe method is used in order to use these operators and also we can implement cahining of these methods using pipe method


  // this.myObservable.subscribe((val)=>{

  //   this.data.push(val);


  // filterObs = this.myObservable.pipe(map((val) => {


  //   return val * 5  }),

  //   filter((val) => {
   
  //     return val%4==0;
   
  //    }
  //   )); //using both operators with pipe method


  // filterObs=this.myObservable.pipe(filter((val) => {
   
  //  return val%4==0;

  // }))

  //using from operator data is emmitted in the form of chunks so we need to push each chunk into the data array

  GetSyncedData() {

    //this.transformObs.subscribe({

    
    this.myObservable.subscribe({

      next: (val: any) => {

        this.data.push(val);

      }
    })
  }

}



