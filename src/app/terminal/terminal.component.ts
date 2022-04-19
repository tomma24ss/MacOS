import { Component, OnInit } from '@angular/core';
import { AppService} from '../Services/app.service';
import { SharedVariablesService } from '../Services/shared-variables.service';
import { TerminalService } from 'primeng/terminal';
import { DataService } from '../Services/data.service';
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService]
})
export class TerminalComponent implements OnInit {
  enDarkmode : Boolean = false;
  constructor(public sharedVars:SharedVariablesService, public appService:AppService, public terminalService: TerminalService, private dataservice:DataService) {}
  
  ngOnInit(): void {
    this.sharedVars.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    this.terminalService.commandHandler.subscribe(command => {
      var spcommand = command.split(' ');
      let result = '';
      switch (spcommand[0]) {
        case 'help':
          result = "'date'  ,  'open [app]'  ,  'close [app]',  'sendAnonymousSMS [countrycode][number][message]'";
          break;
        case 'date':
          result = new Date().toDateString();
          break;
        case 'open':
          var app = this.appService.getApp(spcommand[1]);
          if(app === undefined) result = 'app not found';
          else if (app.enabled === true) result = app.appName + ' already open';
          else this.appService.enableApp(app, true);
          break;
        case 'close':
          var app = this.appService.getApp(spcommand[1]);
          if(app === undefined) result = 'settings already closed';
          else if (app.enabled === false) result = app.appName + ' already closed';
          else this.appService.enableApp(app, false);
          break;
        case 'sendAnonymousSMS':
            this.dataservice.sendTextBeltPostRequest(spcommand[1], spcommand[2],spcommand[3]).subscribe((data: any) => {
              console.log(data);
              result = data.succes ? "Anonymous SMS send succesfull.": data.error;
             })
          break;
        default:
          result = 'Unknown command:' + command;
          break;
      }
      console.log(result);
      this.terminalService.sendResponse(result);
    });
    
  }
  EnableApp(value: Boolean) {
    
  }

  Close() {
    //this.shareDataService.enSettings = false;
    this.appService.enableApp(this.appService.getApp("terminal"), false);
  }
  

}
