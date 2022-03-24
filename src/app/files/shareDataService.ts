import { BehaviorSubject } from "rxjs";

export class shareDataService {

    public enDarkmode = new BehaviorSubject<Boolean>(!new Boolean);
    public currentColorTheme = this.enDarkmode.asObservable();

    public enSettings = new BehaviorSubject<Boolean>(!new Boolean);
    public currentSettings = this.enSettings.asObservable();

    constructor () {}
    
    changeColorTheme(value : Boolean) {
        this.enDarkmode.next(value);
    }

    enableSettings(value : Boolean) {
        this.enSettings.next(value);
    }

}