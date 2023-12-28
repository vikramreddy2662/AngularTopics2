import { Component } from '@angular/core';
import { TaskService } from '../Services/TaskService';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {

  tasks:any[]=['task1','task2','task3','task4'];


  constructor(private taskService:TaskService){}


ngOnInit(){

   this.taskService.createTask.subscribe((value)=>{
 
    this.tasks.push(value);
  

   })
   
  }

}
