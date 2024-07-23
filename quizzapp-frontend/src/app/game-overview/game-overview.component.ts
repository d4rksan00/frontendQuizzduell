import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Quiz } from '../entity/Quiz';
import {CategoryEnum, FileType2LabelMapping} from "../entity/Category.enum";
import {EMPTY, Observable, of} from "rxjs";

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

  // Enum mapping
  protected readonly CategoryEnum = CategoryEnum;
  public FileType2LabelMapping = FileType2LabelMapping

  constructor(private quizService: QuizService){

  }

  ngOnInit(): void {
    Object.values(this.FileType2LabelMapping)
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
