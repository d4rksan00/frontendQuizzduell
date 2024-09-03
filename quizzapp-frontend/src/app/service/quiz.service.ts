import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../entity/Quiz';
import {Player} from "../entity/Player";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizUrl: string = "http://localhost:8181/quiz"

  constructor(private httpClient: HttpClient) { }


   createDummyQuiz(playerOne: Player, playerTwo: Player): Observable<Quiz> {
    const quiz : Quiz = new Quiz([], playerOne, playerTwo, 0, 0, false, undefined)
    return this.httpClient.post<Quiz>(`${this.quizUrl}/create`, quiz)
   }

   getDummyQuiz(): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.quizUrl}/1`)
   }
}
