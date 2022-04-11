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
  apps : app[];
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService,public appController:appController) { }  
  ngOnInit(): void {
    this.shareDataService.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    
    this.appController.appsAsObservable.subscribe(x => this.apps = x);
  }
  title = 'my-os2';

  IconMenubarClick(app : app) {
    this.appController.enableApp(app, !app.enabled);
  }
  getAppEnabledValue(value : String) : Boolean|undefined {
    return this.appController.getAppEnabledValue(value);
  }
}