import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_SERVER = "http://localhost:";

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.http.get(this.API_SERVER).pipe(catchError(this.handleError));
  }
  public sendTextBeltPostRequest(countrycode: string, number: string, message: string) {
    const smsAPI = 'https://textbelt.com/text'
    const headers = {'Content-Type': 'application/json'};
    const key = 'textbelt';
    const body = JSON.stringify({
      phone: '+' + countrycode + number,
      message: message,
      key: key,
    });
    return this.http.post<any>(smsAPI, body, { headers }).pipe(retry(1), catchError(this.handleError));
  }
}
