import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { take } from "rxjs";

@Injectable({providedIn: 'root'})
export class LoggingService { 
/**
 *
 */

constructor(public http: HttpClient) {
}


sendData(data:any)  //später Datenmodel verschicken
{
    const test={
        eventName:data,
        timestamp: 223123
    }
    this.http.post('http://localhost:3000/log/config',test).pipe(take(1)).subscribe(result=>console.log(result));


}

}