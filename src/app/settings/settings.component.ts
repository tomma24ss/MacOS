import { Component, OnInit,AfterViewInit, NgModule, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { shareDataService } from '../files/shareDataService';
import { appScales } from "../files/interfaces" 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService) { }
  
  ngOnInit(): void {
    this.shareDataService.currentColorTheme.subscribe(x => this.enDarkmode = x);
    
  }

  changeColorTheme() {
    this.shareDataService.changeColorTheme(this.enDarkmode);
  }
  Close() {
    this.shareDataService.enableSettings(false);
  }
}
