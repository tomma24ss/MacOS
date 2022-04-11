import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { appController } from '../files/appController';
import { shareDataService } from '../files/shareDataService';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css']
})
export class SafariComponent implements OnInit  {

  enDarkmode : Boolean = false;
  src: string = "https://www.youtube.com/"; // <- YOUR URL
  @ViewChild('iframe') iframe: ElementRef;
  constructor(public shareDataService:shareDataService, public appController:appController) {}

  ngOnInit(): void {
  }
  Close() {
    //this.shareDataService.enSettings = false;
    this.appController.enableApp(this.appController.getApp("safari"), false);
  }
}
