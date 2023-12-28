import { Injectable ,EventEmitter} from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class TaskService{


// createTask: EventEmitter<string>=new EventEmitter<string>();

createTask=new Subject<string>()

//Event emmitter=>Observable which emits data

OnCreateTask(value:string){ //created method and called this method in show-task componenet class. passing an argument value

    this.createTask.next(value);


}

}