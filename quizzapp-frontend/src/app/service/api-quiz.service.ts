import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../entity/Category";

@Injectable({
  providedIn: 'root'
})
export class ApiQuizService {

  constructor(private httpClient: HttpClient) {
  }

  public getQuestions(category:string): Observable<any> {
    return this.httpClient.get("https://opentdb.com/api.php?amount=3&category="
      + category + "&difficulty=medium&type=multiple")
  }
}
