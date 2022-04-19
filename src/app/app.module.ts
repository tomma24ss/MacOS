import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {TerminalModule} from 'primeng/terminal';
import { HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { TerminalComponent } from './terminal/terminal.component';
import { AppComponent } from './app.component';
import { SettingsComponent } from './settings/settings.component';
import { SafariComponent } from './safari/safari.component';
import { MessagesComponent } from './messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    TerminalComponent,
    SafariComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    FormsModule,
    DragDropModule,
    TerminalModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
