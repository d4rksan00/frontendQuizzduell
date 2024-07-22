import { Injectable } from '@angular/core';
import {ApiQuizRoundService} from "./api-quiz-round.service";
import {Observable} from "rxjs";
import {Question} from "../entity/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apiQuizRoundService: ApiQuizRoundService) {
  }

  public getQuestions(): Observable<any> {
    return this.apiQuizRoundService.getQuestions()
  }
}
