import { Component, OnInit } from '@angular/core';
import { app } from './files/interfaces';
import { SharedVariablesService } from './Services/shared-variables.service';
import { AppService} from './Services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apps : app[];
  enDarkmode : Boolean = false;
  constructor(public sharedVars:SharedVariablesService,public appService:AppService) { }  
  ngOnInit(): void {
    this.sharedVars.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    
    this.appService.appsAsObservable.subscribe(x => this.apps = x);
  }
  title = 'my-os2';

  IconMenubarClick(app : app) {
    this.appService.enableApp(app, !app.enabled);
  }
  getAppEnabledValue(value : String) : Boolean|undefined {
    return this.appService.getAppEnabledValue(value);
  }
}