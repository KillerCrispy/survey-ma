import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { take } from 'rxjs';
import { COLOR_NAMES } from './constants';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  public startTime = 0;
  public endTime = 0;
  public datumZeit = "";

  constructor(public http: HttpClient) {}

  sendData(
    data: any //später Datenmodel verschicken
  ) {
    this.endTime = new Date().getTime();  //End time 

    const duration = this.endTime - this.startTime; 
    //console.log('start:', this.startTime);
    //console.log('ende:', this.endTime );
    //console.log('duration:', duration );
    const timeStamp = this.datumZeit;

    const storage: any = {};
    COLOR_NAMES.forEach((element: string) => {
      storage[element] = localStorage.getItem(element);
    });

    
    const test = {
      ...data,
      ...storage,
      testOrder: localStorage.getItem('testOrder'),
      colorOrder: localStorage.getItem('colorOrder'),
      duration :  this.millisToMinutesAndSeconds(duration),
      TimeStamp: this.datumZeit,

      
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ae12bc42'
    });
    console.log('data:', data );
    console.log('test:', test);
    const url = isDevMode()
      ? 'http://localhost:3000/log/chrissy-ma'
      : 'http://itv21.informatik.htw-dresden.de:3000/log/chrissy-ma';
    this.http
      .post(url, test , { headers: headers }) // +test
      .pipe(take(1))
      .subscribe({
        complete: () => { console.log('Logging Success'); },
        error: (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
              console.log('Client-side error occured.');
          } else {
              console.log('Server-side error occured.');
              console.log(err.error);
          }
        }
      });
  }

   millisToMinutesAndSeconds(millis: number) {
    var minutes = Math.floor(millis / 60000);
    var seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  setStartTime(){
    this.startTime = new Date().getTime();  // Start time 
  }

  makeDate(){
let jetzt = new Date();
let tag = jetzt.getDate().toString().padStart(2, '0');
let monat = (jetzt.getMonth() + 1).toString().padStart(2, '0'); // Monate werden von 0 bis 11 gezählt
let jahr = jetzt.getFullYear();
let stunden = jetzt.getHours().toString().padStart(2, '0');
let minuten = jetzt.getMinutes().toString().padStart(2, '0');
let sekunden = jetzt.getSeconds().toString().padStart(2, '0');

this.datumZeit = `${tag}.${monat}.${jahr} ${stunden}:${minuten}:${sekunden}`;
console.log('was steht hier drin, kommen wir hier an:',this.datumZeit);

  }
  
}
