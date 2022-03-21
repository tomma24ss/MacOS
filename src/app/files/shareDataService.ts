import { BehaviorSubject } from "rxjs";

export class shareDataService {

    private bool : Boolean = false;
    public enDarkmodeContent = new BehaviorSubject<Boolean>(this.bool);
    public currentColorTheme = this.enDarkmodeContent.asObservable();

    constructor () {}

    changeColorTheme(value : Boolean) {
        this.enDarkmodeContent.next(value);
    }

}