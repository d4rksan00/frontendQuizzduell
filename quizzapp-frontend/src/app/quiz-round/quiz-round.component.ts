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

export class QuizRoundComponent implements MatProgressBarModule, OnInit {

  // Question variables
  questions: Question[] = [];
  currentQuestion: Question | undefined;
  questionService: QuestionService;
  shuffledAnswers: string[] = [];

  // Timer variables
  progressbarValue = 100;
  currentSec: number = 0;

  // "clicked" variables
  answered: boolean = false;
  isVisible: boolean = false;

  // constructor
  constructor(questionService: QuestionService) {
    this.questionService = questionService;
  }

  // Get questions from requested category
  public getQuestions() {
    return this.questionService.getQuestions().subscribe((response) => {
      this.questions = response.results;
      this.currentQuestion = this.questions[0]

      this.shuffleAnswers(this.currentQuestion)
    })
  }

  // Shuffle possible answers
  shuffleAnswers(question: Question | undefined) {
    this.shuffledAnswers.length = 0
    this.shuffledAnswers = this.shuffledAnswers.concat(question?.incorrect_answers!)
    this.shuffledAnswers.push(question?.correct_answer!)
    this.shuffledAnswers.sort(() => Math.random() - 0.5);
  }

  // Timer bar
  startTimer(seconds: number) {
    this.answered = false;

    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / time;
      this.currentSec = sec;

      if (this.currentSec === time || this.answered) {
        sub.unsubscribe();
      } if (this.progressbarValue === 0 && !this.answered) {
        alert("Time has run out!")
        sub.unsubscribe();
        this.clicked("");
      }
    });
  }

  //"clicked" event
  clicked(answer: string) {
    this.answered = true;
    this.isVisible = true;

    if (answer === this.currentQuestion?.correct_answer) {
      this.currentQuestion.answerIsRight = true;
      alert("Your answer is correct!");
    } else {
      alert("Unfortunately your answer is false!");
    }
  }

  //jump to next question
  nextQuestion(index: number) {
    this.currentQuestion = this.questions[index + 1]
    this.isVisible = false;
    this.currentQuestion.answerIsRight = false;

    this.startTimer(30)
    this.shuffleAnswers(this.currentQuestion)
  }

  // HTML Decoder DOMParser
  htmlDecode(input: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'text/html');
    return doc.documentElement.textContent!;
  }

  ngOnInit() {
    this.startTimer(30)
    this.getQuestions()
  }
}
