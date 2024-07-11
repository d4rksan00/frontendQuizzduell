import {Component, OnInit} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {interval} from "rxjs";

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrl: './quiz-round.component.css',
})
export class QuizRoundComponent implements MatProgressBarModule, OnInit{

  progressbarValue = 100;
  curSec: number = 0;

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }

  ngOnInit() {this.startTimer(30)
  }
}
