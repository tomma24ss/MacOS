import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedVariablesService {

  private _enDarkmode = new BehaviorSubject<Boolean>(false);
  public getCurrentColorTheme = this._enDarkmode.asObservable();
  

  constructor () {}
  
  public set enDarkmode(value : Boolean) {
      this._enDarkmode.next(value);
  }
}
