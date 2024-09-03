import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../entity/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizUrl: string = "http://localhost:8181/quiz"

  constructor(private httpClient: HttpClient) { }


   createDummyQuiz(quiz: Quiz): Observable<Quiz> {
    return this.httpClient.post<Quiz>(`${this.quizUrl}/create`, quiz)
   }

   getDummyQuiz(): Observable<Quiz> {
    return this.httpClient.get<Quiz>(`${this.quizUrl}/1`)
   }
}
