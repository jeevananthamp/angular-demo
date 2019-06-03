import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent,ServerComponent,ServersComponent ],
    providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
