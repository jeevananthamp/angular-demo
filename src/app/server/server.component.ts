import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  styles :[`
  .online{
    color:white;
  }
  `],
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  ServerId = 12;
  ServerStatus = "online";
  constructor()
  {
    this.ServerStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
  }
  getServerStatus() {
    return this.ServerStatus;
  }
  getColor()
  {
    return this.ServerStatus === 'online' ? 'green' : 'red';
  }
}
