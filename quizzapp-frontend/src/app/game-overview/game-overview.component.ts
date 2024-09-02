import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { Quiz } from '../entity/Quiz';
import {CategoryEnum, FileType2LabelMapping} from "../entity/Category.enum";
import { ApiQuizService } from '../service/api-quiz.service';

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

  //Mockdaten
  //quiz$ = this.quizService.getQuizzes();

  // quiz!: Quiz;
  isRight: boolean | undefined;
  isWrong: boolean | undefined;

  //Backenddaten
  quiz!: Quiz;

  // Enum mapping
  protected readonly CategoryEnum = CategoryEnum;
  public FileType2LabelMapping = FileType2LabelMapping


  constructor(private quizService: QuizService,
    private quizApiService: ApiQuizService
  ){

  }

  ngOnInit(): void {
    this.buildpage(parseInt(sessionStorage.getItem('gameToOpen')!));
    Object.values(this.FileType2LabelMapping)
  }

  buildpage(quizId: number) {
    this.quizApiService.getQuizById(quizId).subscribe((data) => {
      this.quiz = data
      console.log('********getQuizById*******');
      console.log(this.quiz);
    });
    // console.log(this.quiz);
  }


  winClick() {
    this.isRight = true;
  }

  loseClick(){
    this.isWrong = true;
  }
}
