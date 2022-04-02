import { Component, OnInit } from '@angular/core';
import { appController } from '../files/appController';
import { shareDataService } from '../files/shareDataService';
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService, public appController:appController) { }
  
  ngOnInit(): void {
    this.shareDataService.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    
  }
  Close() {
    //this.shareDataService.enSettings = false;
    this.appController.enableApp(this.appController.getApp("terminal"), false);
  }

}
