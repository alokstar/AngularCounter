import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private counter = new Subject<any>();

  constructor() {
  }

  setCounter(v) {
    this.counter = v;
  }

  getCounter() {
    // return this.subject.asObservable();
    const counterObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.counter);
      }, 1);
    });

    return counterObservable;
  }
}
