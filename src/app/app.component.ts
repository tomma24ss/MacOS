import { Component, OnInit } from '@angular/core';
import { app } from './files/app.app';
import { shareDataService } from './files/shareDataService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService) { }  
  ngOnInit(): void {
    this.shareDataService.currentColorTheme.subscribe(x =>    
      this.enDarkmode = x)    
  }
  title = 'my-os2';
  //enDarkmode : Boolean = globals.enDarkmode;
  enSettings : Boolean = false;
  apps : app[] = [
    {appId: 0, appName: "finder", description: "", iconUrl: "/assets/menubar/finder.png"},
    {appId: 1, appName: "safari", description: "", iconUrl: "/assets/menubar/safari.png"},
    {appId: 2, appName: "notes", description: "", iconUrl: "/assets/menubar/notes.png"},
    {appId: 3, appName: "maps", description: "", iconUrl: "/assets/menubar/maps.png"},
    {appId: 4, appName: "music", description: "", iconUrl: "/assets/menubar/music.png"},
    {appId: 5, appName: "appletv", description: "", iconUrl: "/assets/menubar/appletv.png"},
    {appId: 6, appName: "settings", description: "System preferences", iconUrl: "/assets/menubar/settings.png"},
    {appId: 7, appName: "store", description: "", iconUrl: "/assets/menubar/store.png"},
    {appId: 8, appName: "dustbin", description: "", iconUrl: "/assets/menubar/dustbin.png"}
  ]

  IconMenubarClick(app : app) {
    console.log(app);
    if(app.appName = "settings") this.enSettings = !this.enSettings;
  }
}
