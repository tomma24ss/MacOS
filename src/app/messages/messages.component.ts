import { Component, OnInit } from '@angular/core';
import { AppService} from '../Services/app.service';
import { SharedVariablesService } from '../Services/shared-variables.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  response: string = "";

  enDarkmode : Boolean = false;
  constructor(public sharedVars:SharedVariablesService, public appService:AppService, private formBuilder: FormBuilder, private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    this.sharedVars.getCurrentColorTheme.subscribe(x => this.enDarkmode = x);
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
  }
  Close() {
    this.appService.enableApp(this.appService.getApp("messages"), false);
  }
  Send() {
    const countrycode =  this.firstFormGroup.value.firstCtrl;
    const number = this.secondFormGroup.value.secondCtrl;
    const text = this.thirdFormGroup.value.thirdCtrl;
    this.dataService.sendTextBeltPostRequest(countrycode, number, text).subscribe((data: any) => {
     this.response = data.succes ? "Anonymous SMS send succesfull.": data.error;
    })
  }
}
