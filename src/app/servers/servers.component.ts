import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',

  selector: '.app-servers',

  templateUrl: `./servers.component.html`,

  styleUrl: './servers.component.css'

})
export class ServersComponent implements OnInit {


  serverName = 'TestServer';

  serverCreationStatus = 'No server was created!';

  allowNewServer = this.serverName.length > 0 ? false : true;

  serverCreated = false;

  servers = ['Testserver', 'Testserver 2'];

  ngOnInit(): void {

  }

  onCreateserver(){
    this.serverCreationStatus = 'Server was created and Name is : ' + this.serverName;
    this.serverCreated = true;
    this.allowNewServer = true;

    this.servers.push(this.serverName);

    this.serverName = '';
  }

  onUpdateServerName(event: Event){

    this.serverName = (<HTMLInputElement>event.target).value;
    this.allowNewServer = this.serverName.length > 0 ? false : true;

    console.log(this.serverName.length);
  }
}