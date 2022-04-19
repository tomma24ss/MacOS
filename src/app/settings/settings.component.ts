import { Component, OnInit,AfterViewInit, NgModule, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../Services/app.service';
import { SharedVariablesService } from '../Services/shared-variables.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  enDarkmode : Boolean = false;
  constructor(public sharedVars:SharedVariablesService, public appService:AppService) { }
  
  ngOnInit(): void {
    this.sharedVars.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
  }

  changeColorTheme() {
    console.log("Called");
    this.sharedVars.enDarkmode = this.enDarkmode;
  }
  Close() {
    //this.shareDataService.enSettings = false;
    this.appService.enableApp(this.appService.getApp("settings"), false);
  }
}
