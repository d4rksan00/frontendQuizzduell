import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../entity/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  // Dummy-Daten sind überflussig geworden
   getQuizzes(): Observable<Quiz> {
     return of();
   }

   getDummyQuiz(): Observable<Quiz> {
    return this.http.get<Quiz>("http://localhost:8181/quiz/1")
   }
}
