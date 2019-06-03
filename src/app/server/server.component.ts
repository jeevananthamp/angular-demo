import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  ServerId = 12;
  ServerStatus = "online";
  getServerStatus() {
    return this.ServerStatus;
  }
}
