import { Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { app, appScales } from './interfaces';
export class appController {
    private _apps : app[] = [
        {appId: 0, appName: "finder", description: "", iconUrl: "/assets/menubar/finder.png", scales: undefined},
        {appId: 1, appName: "safari", description: "", iconUrl: "/assets/menubar/safari.png", scales: undefined},
        {appId: 2, appName: "notes", description: "", iconUrl: "/assets/menubar/notes.png", scales: undefined},
        {appId: 3, appName: "maps", description: "", iconUrl: "/assets/menubar/maps.png", scales: undefined},
        {appId: 4, appName: "music", description: "", iconUrl: "/assets/menubar/music.png", scales: undefined},
        {appId: 5, appName: "appletv", description: "", iconUrl: "/assets/menubar/appletv.png", scales: undefined},
        {appId: 6, appName: "settings", description: "System preferences", iconUrl: "/assets/menubar/settings.png", scales: undefined},
        {appId: 7, appName: "store", description: "", iconUrl: "/assets/menubar/store.png", scales: undefined},
        {appId: 8, appName: "dustbin", description: "", iconUrl: "/assets/menubar/dustbin.png", scales: undefined}
    ]
    constructor () {}

    public get apps() {
        return this._apps;
    }

    
    
}