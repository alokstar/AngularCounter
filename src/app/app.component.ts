import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "./app-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sampleProject';
  counter: any;

  constructor(private appService: AppServiceService) {
    this.appService.setCounter(1);
  }

  ngOnInit(): void {
    this.newCounter();
  }

  newCounter(e ?: any) {
    this.appService.getCounter()
      .subscribe((newCounter) => {
          this.counter = newCounter;
        },
        (error) => {
          console.log(error);
        });
  }
}
