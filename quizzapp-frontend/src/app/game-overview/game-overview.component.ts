import {Component, OnInit} from '@angular/core';
import {QuizService} from '../service/quiz.service';
import {Quiz} from '../entity/Quiz';
import {QuestionService} from "../service/question.service";
import {DataSharingService} from "../service/data-sharing.service";
import {Router} from "@angular/router";


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrl: './game-overview.component.css'
})

export class GameOverviewComponent implements OnInit {

  quiz?: Quiz;

  // quiz!: Quiz;
  isRight: boolean | undefined;
  isWrong: boolean | undefined;

  emittedId! : string;


  constructor(private quizService: QuizService, private dataSharingService: DataSharingService, private router : Router, private questionService: QuestionService ) {
  }

  ngOnInit(): void {
    this.getQuizData();
    this.buildpage();
  }

  buildpage() {
    // this.quiz?.player1.points
  }

  getQuizData(): void {
    // this.quizService.getQuizzes().subscribe(data => this.quiz= data);
    this.quizService.getDummyQuiz().subscribe(data => this.quiz = data)
  }

  winClick() {
    this.isRight = true;
  }

  loseClick() {
    this.isWrong = true;
  }

  onCategoryChanged($event: any) {
    alert("parent: " + $event)
    this.emittedId = $event
  }

  gameStart() {
    this.dataSharingService.changeCurrentCategoryId(this.emittedId)
    this.router.navigate(['homepage', 'quizround']);
  }

  protected readonly alert = alert;
}
