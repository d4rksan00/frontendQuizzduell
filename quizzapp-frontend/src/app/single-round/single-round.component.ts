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

  getAnswerStatus(index: number): string {
    if (typeof this.quiz.quizRound[this.categoryNumber] === 'undefined' || typeof this.quiz.quizRound[this.categoryNumber].question[index] === 'undefined') {
      return '';
    }
    return this.quiz.quizRound[this.categoryNumber].question[index].answerIsRight? 'correct': 'incorrect';
  }
}
