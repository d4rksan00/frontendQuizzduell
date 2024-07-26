import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../entity/Quiz';
import { Player } from '../entity/Player';

@Injectable({
  providedIn: 'root'
})
export class ApiQuizService {

  URL: string = "http://localhost:8181/quiz"

  constructor(private http: HttpClient) { }

  public getOpenQuizzes(player: Player) : Observable<Quiz[]>{
    return this.http.post<Quiz[]>(`${this.URL}/getOpenGames`, player);
  }

}
