import { Component } from "@angular/core";

let serverId = 10;

@Component({
    selector: '.app-server',
    templateUrl:'./server.component.html',
    styleUrl:'./server.component.css'
})

export class ServerComponent{

    serverId:number = serverId;
    serverStatus= '';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    } 

     getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'Online' ? 'green' : 'red'
    }
}