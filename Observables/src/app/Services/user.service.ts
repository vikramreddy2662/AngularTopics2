import { Injectable ,EventEmitter} from "@angular/core";
import { User } from "../Models/User";
import { LoggerService } from "./LoggerService";





@Injectable()
export class UserService {


    users: User[] = [
        new User("vikram reddy", 'male', 'Monthly', 'active'),
        new User("vikas", 'male', 'yearly', 'inactive'),
        new User("Shivani", 'Female', 'Quaterly', 'active')

    ];


    constructor(private logger:LoggerService){}

    GetAllUsers() {

        return this.users;
    }


    OnShowUserDetailsClicked:EventEmitter<User>=new EventEmitter<User>();

   OnShowUserDetails(user:User){

    this.OnShowUserDetailsClicked.emit(user);

   }


    createUser(name: string, gender: string, subType: string, status: string) {


        let user = new User(name, gender, subType, status);
        this.users.push(user);


        this.logger.LogMessage(name,status);

    }





}