import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppServiceService} from "../app-service.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() counter: any;
  @Output() counterChanged: EventEmitter<any> = new EventEmitter();

  constructor(private appService: AppServiceService) {
    this.appService.getCounter()
      .subscribe((newCounter) => {
          this.counter = newCounter;
        },
        (error) => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

  add() {
    this.counter += 3;
    this.appService.setCounter(this.counter);
    this.counterChanged.emit(this.counter);
  }

  substract() {
    this.counter -= 2;
    this.appService.setCounter(this.counter);
    this.counterChanged.emit(this.counter);
  }

  multiply() {
    this.counter = (this.counter * (1.5));
    this.appService.setCounter(this.counter);
    this.counterChanged.emit(this.counter);
  }

  reset() {
    this.counter = 1;
    this.appService.setCounter(this.counter);
    this.counterChanged.emit(this.counter);
  }
}
