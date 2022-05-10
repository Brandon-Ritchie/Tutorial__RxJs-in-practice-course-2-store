import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
} from "rxjs";
import { delayWhen, filter, map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const subject = new ReplaySubject();

    const series$ = subject.asObservable();

    series$.subscribe((val) => console.log("first sub: " + val));

    subject.next(1);
    subject.next(2);
    subject.next(3);

    // subject.complete();

    setTimeout(() => {
      series$.subscribe((val) => console.log("second sub: " + val));

      subject.next(4);
    }, 3000);
  }
}
