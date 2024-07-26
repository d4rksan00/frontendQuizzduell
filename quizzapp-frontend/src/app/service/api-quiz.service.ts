import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Quiz} from "../entity/Quiz";
import {CategoryEnum} from "../entity/Category.enum";

@Injectable({
  providedIn: 'root'
})
export class ApiQuizService {

  chosenCategory = CategoryEnum.ART

  private questionsURL: string = "https://opentdb.com/api.php?amount=3&category=" + this.chosenCategory + "&difficulty=medium&type=multiple"

  constructor(private httpClient: HttpClient) {
  }

  public getQuestions(): Observable<any> {
    return this.httpClient.get(this.questionsURL)
  }

}
