import {Component, Input, OnInit} from '@angular/core';
import {Quiz} from '../entity/Quiz';
import {CategoryEnum, FileType2LabelMapping} from "../entity/Category.enum";

@Component({
  selector: 'app-single-round',
  templateUrl: './single-round.component.html',
  styleUrl: './single-round.component.css'
})
export class SingleRoundComponent {

  @Input() quiz!: Quiz
  @Input() round!: number
  public currentRound: any = this.quiz?.quizRounds[this.round].category

  getAnswerStatus(index: number): string {
    if (typeof this.quiz?.quizRounds[this.round] === 'undefined' || typeof this.quiz?.quizRounds[this.round].question[index] === 'undefined') {
      return '';
    }
    return this.quiz.quizRounds[this.round].question[index].answerIsRight ? 'correct' : 'incorrect';
  }

  submitCategory():string {
    return this.currentRound
  }

  // const FileType2LabelMapping = FileType2LabelMapping;
  protected readonly FileType2LabelMapping = FileType2LabelMapping;
  protected readonly CategoryEnum = CategoryEnum;

}
