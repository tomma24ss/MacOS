import { Component, OnInit } from '@angular/core';
import { appController } from '../files/appController';
import { shareDataService } from '../files/shareDataService';
import { TerminalService } from 'primeng/terminal';
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService]
})
export class TerminalComponent implements OnInit {
  enDarkmode : Boolean = false;
  constructor(public shareDataService:shareDataService, public appController:appController, public terminalService: TerminalService) {}
  
  ngOnInit(): void {
    this.shareDataService.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    this.terminalService.commandHandler.subscribe(command => {
      var spcommand = command.split(' ');
      let result = '';
      switch (spcommand[0]) {
        case 'help':
          result = "'date'  ,  'open [app]'  ,  'close [app]'";
          break;
        case 'date':
          result = new Date().toDateString();
          break;
        case 'open':
          var app = this.appController.getApp(spcommand[1]);
          if(app === undefined) result = 'app not found';
          else if (app.enabled === true) result = app.appName + ' already open';
          else this.appController.enableApp(app, true);
          break;
        case 'close':
          var app = this.appController.getApp(spcommand[1]);
          if(app === undefined) result = 'settings already closed';
          else if (app.enabled === false) result = app.appName + ' already closed';
          else this.appController.enableApp(app, false);
          break;
        default:
          result = 'Unknown command:' + command;
          break;
      }
      this.terminalService.sendResponse(result);
    });
    
  }
  EnableApp(value: Boolean) {
    
  }

  Close() {
    //this.shareDataService.enSettings = false;
    this.appController.enableApp(this.appController.getApp("terminal"), false);
  }
  

}
