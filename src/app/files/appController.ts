import { Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { app } from './interfaces';
import { BehaviorSubject } from "rxjs";
export class appController {

    constructor () {

    }
    private _apps = new BehaviorSubject<app[]>([
        {appId: 0, appName: "finder", description: "", iconUrl: "/assets/menubar/finder.png", scales: undefined, enabled: false},
        {appId: 1, appName: "safari", description: "", iconUrl: "/assets/menubar/safari.png", scales: undefined, enabled: false},
        {appId: 2, appName: "notes", description: "", iconUrl: "/assets/menubar/notes.png", scales: undefined, enabled: false},
        {appId: 3, appName: "maps", description: "", iconUrl: "/assets/menubar/maps.png", scales: undefined, enabled: false},
        {appId: 4, appName: "music", description: "", iconUrl: "/assets/menubar/music.png", scales: undefined, enabled: false},
        {appId: 5, appName: "appletv", description: "", iconUrl: "/assets/menubar/appletv.png", scales: undefined, enabled: false},
        {appId: 6, appName: "settings", description: "System preferences", iconUrl: "/assets/menubar/settings.png", scales: undefined, enabled: false},
        {appId: 7, appName: "terminal", description: "CUI", iconUrl: "/assets/menubar/terminal.png", scales: undefined, enabled: false},
        {appId: 8, appName: "store", description: "", iconUrl: "/assets/menubar/store.png", scales: undefined, enabled: false},
        {appId: 9, appName: "dustbin", description: "", iconUrl: "/assets/menubar/dustbin.png", scales: undefined, enabled: false}
    ]);
    public get getCurrentApps() {
        return this._apps.asObservable();
    }
    public set apps(apps : app[]) {
        this._apps.next(apps);
    }
    public enableApp(app : app, value : Boolean) {
        this._apps.getValue().map((a:app) => a.enabled = a.appName === app.appName ? value : a.enabled);
    }
    public getApp(value:String):app {
        return this._apps.getValue().find((a:app) => a.appName === value)!;
    }
    public getAppEnabledValue(value : String):Boolean {
        return this.getApp(value)?.enabled!;
    }
}