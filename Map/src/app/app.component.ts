import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{from}  from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Map';


  data:any[]=[];

array1=[12,32,45,67,87,90];

  
  myObservable=from(this.array1);

  transformObs;


  GetSyncedData(){

  // this.myObservable.subscribe((val)=>{
  
  //   this.data.push(val);


  this.transformObs=this.myObservable.pipe(map ( (val)=>{
   

    return val*5;


  }))

  


  }}
