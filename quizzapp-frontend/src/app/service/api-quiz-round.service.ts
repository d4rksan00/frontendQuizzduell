import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Question} from "../entity/Question";

@Injectable({
  providedIn: 'root'
})
export class ApiQuizRoundService {
  private questionsURL: string = "https://opentdb.com/api.php?amount=3&difficulty=medium&type=multiple"

  constructor(private httpClient: HttpClient) {
  }

  public getQuestions(): Observable<any> {
    return this.httpClient.get(this.questionsURL)
  }
}
