import {Component, Input, OnInit} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {interval} from "rxjs";
import {Question} from "../../model/question";
import {dummyQuestion} from "../../temp";

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrl: './quiz-round.component.css',
})
export class QuizRoundComponent implements MatProgressBarModule, OnInit{

  progressbarValue = 100;
  curSec: number = 0;
  @Input() question: Question = dummyQuestion;
  shuffledAnswers: string[] = [];
  answered : boolean = false;

  startTimer(seconds: number) {
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / time;
      this.curSec = sec;

      if (this.curSec === time) {
        sub.unsubscribe();
      }
    });
  }

  clicked(answer: string) {
    this.answered = true;
    alert(answer)
    if (answer === this.question.correct_answer) {
    }
  }

  ngOnInit() {this.startTimer(30)
    this.shuffledAnswers = this.shuffledAnswers.concat(this.question.incorrect_answers)
    this.shuffledAnswers.push(this.question.correct_answer)
    this.shuffledAnswers.sort(()=>Math.random()-0.5)
  }


}
