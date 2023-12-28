import { Component } from '@angular/core';
import { TaskService } from '../Services/TaskService';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  newTask :string='';


  constructor(private taskService:TaskService){}

  OnCreateTask()
{
  //console.log(this.newTask);
   
  this.taskService.OnCreateTask(this.newTask);
  /*calling the method in the service class and passing a value newTask to the argument(value) passed  
  in that method */




}
}
