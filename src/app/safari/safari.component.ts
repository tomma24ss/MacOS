import { Component, OnInit } from '@angular/core';
import { AppService} from '../Services/app.service';
import { SharedVariablesService } from '../Services/shared-variables.service';

@Component({
  selector: 'app-safari',
  templateUrl: './safari.component.html',
  styleUrls: ['./safari.component.css']
})
export class SafariComponent implements OnInit  {

  enDarkmode : Boolean = false;
  constructor(public sharedVars:SharedVariablesService, public appService:AppService) {}

  ngOnInit(): void {
    this.sharedVars.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
  }
  Close() {
    this.appService.enableApp(this.appService.getApp("safari"), false);
  }
}
