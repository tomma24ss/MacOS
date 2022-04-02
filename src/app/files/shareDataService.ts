import { BehaviorSubject } from "rxjs";

export class shareDataService {

    private _enDarkmode = new BehaviorSubject<Boolean>(false);
    public getCurrentColorTheme = this._enDarkmode.asObservable();

    //private _enSettings = new BehaviorSubject<Boolean>(false);
    //public getCurrentSettings = this._enSettings.asObservable();

    

    constructor () {}
    
    public set enDarkmode(value : Boolean) {
        this._enDarkmode.next(value);
    }
    


}