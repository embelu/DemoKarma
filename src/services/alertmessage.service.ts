import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertmessageService {

  constructor() { }

  getMessage() {
    return "it's OK";
  }

  getMessageFromObservable(): Observable<string> {
    return of("it's Ok from Observable");
  }
}
