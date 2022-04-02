export interface app {
    appId: number;
    appName: string;
    description: string;
    iconUrl: string;
    scales: appScales|undefined;
    enabled: Boolean;
}
export interface appScales {
    width: number;
    height: number;
    left: number;
    top: number;
}