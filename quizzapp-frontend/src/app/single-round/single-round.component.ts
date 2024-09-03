import { Component, Input } from '@angular/core';
import { Quiz } from '../entity/Quiz';

@Component({
  selector: 'app-single-round',
  templateUrl: './single-round.component.html',
  styleUrl: './single-round.component.css'
})
export class SingleRoundComponent {

  @Input() quiz!: Quiz
  @Input() categoryNumber!: number
  
  getAnswerStatus(index: number, isPlayerOne: boolean): string {

    if (typeof this.quiz.quizRounds[this.categoryNumber] === 'undefined' || typeof this.quiz.quizRounds[this.categoryNumber].question[index] === 'undefined') {
      return '';
    }
    if(isPlayerOne){
      if(this.quiz.quizRounds[this.categoryNumber].question[index].isPlayerOneCorrect){
        this.quiz.playerOnePoints++
      }
      return this.quiz.quizRounds[this.categoryNumber].question[index].isPlayerOneCorrect? 'correct': 'incorrect';
    } else{
      if(this.quiz.quizRounds[this.categoryNumber].question[index].isPlayerTwoCorrect){
        this.quiz.playerTwoPoints++
      }
      return this.quiz.quizRounds[this.categoryNumber].question[index].isPlayerTwoCorrect? 'correct': 'incorrect';
    }
  }

  getCategory(): string {
    if (typeof this.quiz.quizRounds[this.categoryNumber] === 'undefined') {
      return 'Category ' + (1 + this.categoryNumber);
    } else{
      return this.quiz.quizRounds[this.categoryNumber].question[0].category;
    }
  }

}
