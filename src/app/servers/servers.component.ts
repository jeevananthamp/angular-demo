import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  // ServerCreationStatus = " No Server was Created !";
  ServerName = "JeevaServer";
  ServerCreated=false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  OnCreateServer() {
     this.ServerCreated=true;
    // this.ServerCreationStatus =
    //   " Server Created Succesfully ! and The server name is " +
    //   this.ServerName +
    //   " .";
     
  }

  // OnUpdateServerName(event: Event) {
  //   this.ServerName = (<HTMLInputElement>event.target).value;
  //   console.log((<HTMLInputElement>event.target).value);
  // }
}
