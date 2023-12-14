import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    console.log('test:', test);
    this.http
      .post('http://localhost:3000/log/chrissy-ma', test)
      .pipe(take(1))
      .subscribe((result) => console.log(result));
  }
}
