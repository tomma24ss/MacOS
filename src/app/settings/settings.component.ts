import { Component, OnInit,AfterViewInit, NgModule, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { appController } from '../files/appController';
import { shareDataService } from '../files/shareDataService';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService, public appController:appController) { }
  
  ngOnInit(): void {
    this.shareDataService.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
  }

  changeColorTheme() {
    console.log("Called");
    this.shareDataService.enDarkmode = this.enDarkmode;
  }
  Close() {
    //this.shareDataService.enSettings = false;
    this.appController.enableApp(this.appController.getApp("settings"), false);
  }
}
