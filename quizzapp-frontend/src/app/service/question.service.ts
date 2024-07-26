import { Injectable } from '@angular/core';
import {ApiQuizService} from "./api-quiz.service";
import {Observable} from "rxjs";
import {Question} from "../entity/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apiQuizService: ApiQuizService) {
  }

  public getQuestions(): Observable<any> {
    return this.apiQuizService.getQuestions()
  }

}
