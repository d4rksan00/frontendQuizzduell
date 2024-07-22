import {Component, OnInit} from '@angular/core';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {interval} from "rxjs";
import {Question} from "../entity/Question";
import {QuestionService} from "../service/question.service";

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrl: './quiz-round.component.css',
  providers: [QuestionService]
})
export class QuizRoundComponent implements MatProgressBarModule, OnInit{

  // Question variables
  questions: Question[] = [];
  questionService: QuestionService
  shuffledAnswersOne: string[] = [];
  shuffledAnswersTwo: string[] = [];
  shuffledAnswersThree: string[] = [];
  isFirst : boolean = true;
  isSecond : boolean = false;
  isThird : boolean = false;

  // Timer variables
  progressbarValue = 100;
  curSec: number = 0;

  // "clicked" variables
  answered : boolean = false;
  isVisible : boolean = false;

  // constructor
  constructor(questionService: QuestionService) {
    this.questionService = questionService;
  }

  htmlDecode(input: string):string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    return doc.documentElement.textContent!;
  }

  // Get questions from requested category
  public getQuestions() {
    return this.questionService.getQuestions().subscribe((response) => {
      this.questions = response.results;

      this.shuffledAnswersOne = this.shuffledAnswersOne.concat(this.questions[0]?.incorrect_answers)
      this.shuffledAnswersOne.push(this.questions[0]?.correct_answer)
      this.shuffledAnswersOne.sort(()=>Math.random()-0.5);

      this.shuffledAnswersTwo = this.shuffledAnswersTwo.concat(this.questions[1]?.incorrect_answers)
      this.shuffledAnswersTwo.push(this.questions[1]?.correct_answer)
      this.shuffledAnswersTwo.sort(()=>Math.random()-0.5);

      this.shuffledAnswersThree = this.shuffledAnswersThree.concat(this.questions[2]?.incorrect_answers)
      this.shuffledAnswersThree.push(this.questions[2]?.correct_answer)
      this.shuffledAnswersThree.sort(()=>Math.random()-0.5);
    })
  }

  // Timer bar
  startTimer(seconds: number) {
    this.answered = false;

    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / time;
      this.curSec = sec;

      if (this.curSec === time || this.answered) {
        sub.unsubscribe();
      }
    });
  }

  //set question flag
  setQuestionFlag (questionNr : boolean) {
    return !questionNr
  }

  //"clicked" event
  clicked(answer: string) {
    this.answered = true;
    this.isVisible = true;
    if (answer === this.questions[0]?.correct_answer) {
      alert("Your answer is correct!");
    } else {
      alert("Unfortunately your answer is false!");
    }
  }


  ngOnInit() {this.startTimer(30)
    this.getQuestions()
    }
}
