import { Injectable } from "@angular/core";
import { InjectSetupWrapper } from "@angular/core/testing";

@Injectable()
export class Service{

    OnSubscribeClicked(type:any){


        alert('Thank you for Subscribing this channel.Now you are a member of our Family,You Bought a "'+type+'" pack' );


    }

}