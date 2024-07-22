import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Quiz } from '../entity/Quiz';

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

export class GameOverviewComponent implements OnInit{

  quiz$ = this.quizService.getQuizzes();

  // quiz!: Quiz;
  isRight: boolean | undefined;
  isWrong: boolean | undefined;


  constructor(private quizService: QuizService){

  }

  ngOnInit(): void {
    this.getQuizData();
    this.buildpage();
  }
  buildpage() {
    // this.quiz?.player1Points
  }


  getQuizData(): void{
    // this.quizService.getQuizzes().subscribe(data => this.quiz= data);
  }

  winClick() {
    this.isRight = true;
  }

  loseClick(){
    this.isWrong = true;
  }
}
