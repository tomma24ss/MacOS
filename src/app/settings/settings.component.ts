import { Component, OnInit, NgModule } from '@angular/core';
import { shareDataService } from '../files/shareDataService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService) { }  
  ngOnInit(): void {
    this.shareDataService.currentColorTheme.subscribe(x =>    
     this.enDarkmode = x)    
  }

  changeColorTheme() {
    this.shareDataService.changeColorTheme(this.enDarkmode);
  }
  
}
