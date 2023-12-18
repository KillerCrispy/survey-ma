import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { take } from 'rxjs';
import { COLOR_NAMES } from './constants';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  /**
   *
   */

  constructor(public http: HttpClient) {}

  sendData(
    data: any //später Datenmodel verschicken
  ) {
    const storage: any = {};
    COLOR_NAMES.forEach((element: string) => {
      storage[element] = localStorage.getItem(element);
    });
    const test = {
      surveyData: data,
      localstorage: storage,
      testOrder: localStorage.getItem('testOrder'),
      colorOrder: localStorage.getItem('colorOrder'),
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ae12bc42'
    });
    // console.log('test:', test);
    const url = isDevMode()
      ? 'http://localhost:3000/log/chrissy-ma'
      : 'http://itv21.informatik.htw-dresden.de:3000/log/chrissy-ma';
    this.http
      .post(url, data, { headers: headers })
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
}
