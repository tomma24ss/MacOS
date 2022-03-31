import { Component, OnInit } from '@angular/core';
import { app } from './files/interfaces';
import { shareDataService } from './files/shareDataService';
import { appController } from './files/appController';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  enSettings : Boolean = false;
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService,public appController:appController) { }  
  ngOnInit(): void {
    this.shareDataService.currentColorTheme.subscribe(x =>    
      this.enDarkmode = x)
    this.shareDataService.currentSettings.subscribe(x =>
      this.enSettings = x)
  }
  title = 'my-os2';
  apps : app[] = this.appController.apps;

  IconMenubarClick(app : app) {
    console.log(app);
    if(app.appName = "settings") this.enSettings = !this.enSettings;3
  }
}