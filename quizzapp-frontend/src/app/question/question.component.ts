import {Component, Inject, Input, OnInit} from '@angular/core';
import {Question} from "../entity/Question";
import {QuestionService} from "../service/question.service";
import {QuizRoundComponent} from "../quiz-round/quiz-round.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit{

  @Input() question!: Question;
  constructor(private questionService: QuestionService, @Inject(QuizRoundComponent) private quizRoundComponent: QuizRoundComponent) {
  }
  ngOnInit() {
  }

}
