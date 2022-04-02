import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { shareDataService } from './files/shareDataService';
import { appController } from './files/appController';
import { TerminalComponent } from './terminal/terminal.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TerminalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule

  ],
  providers: [
    shareDataService,
    appController
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
