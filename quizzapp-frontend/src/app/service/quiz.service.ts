import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../entity/Quiz';
import { ApiQuizService } from './api-quiz.service';
import { Player } from '../entity/Player';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  data = {
    "quizId": 1,
    "quizRound":
      [
        {
          "quizRoundId": 1,
          "question": [
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Bundesländer hat Deutschland?",
              "correct_answer": "16",
              "incorrect_answers": [
                "15",
                "14",
                "13"
              ],
              "answerIsRight": true
            },
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Einwohner hat Deutschland?",
              "correct_answer": "85 Mio",
              "incorrect_answers": [
                "80 Mio",
                "82 Mio",
                "90 Mio"
              ],
              "answerIsRight": true
            },
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Bundesländer hat Deutschland?",
              "correct_answer": "16",
              "incorrect_answers": [
                "15",
                "14",
                "13"
              ],
              "answerIsRight": false
            },
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Bundesländer hat Deutschland?",
              "correct_answer": "16",
              "incorrect_answers": [
                "15",
                "14",
                "13"
              ],
              "answerIsRight": true
            },
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Einwohner hat Deutschland?",
              "correct_answer": "85 Mio",
              "incorrect_answers": [
                "80 Mio",
                "82 Mio",
                "90 Mio"
              ],
              "answerIsRight": true
            },
            {
              "difficulty": "hard",
              "category": "Geo",
              "question": "Wie viele Bundesländer hat Deutschland?",
              "correct_answer": "16",
              "incorrect_answers": [
                "15",
                "14",
                "13"
              ],
              "answerIsRight": true
            },
          ],
        },
        {
          "quizRoundId": 2,
          "question":
            [
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Bundesländer hat Deutschland?",
                "correct_answer": "16",
                "incorrect_answers": [
                  "15",
                  "14",
                  "13"
                ],
                "answerIsRight": true
              },
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Einwohner hat Deutschland?",
                "correct_answer": "85 Mio",
                "incorrect_answers": [
                  "80 Mio",
                  "82 Mio",
                  "90 Mio"
                ],
                "answerIsRight": true
              },
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Bundesländer hat Deutschland?",
                "correct_answer": "16",
                "incorrect_answers": [
                  "15",
                  "14",
                  "13"
                ],
                "answerIsRight": true
              },
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Bundesländer hat Deutschland?",
                "correct_answer": "16",
                "incorrect_answers": [
                  "15",
                  "14",
                  "13"
                ],
                "answerIsRight": true
              },
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Einwohner hat Deutschland?",
                "correct_answer": "85 Mio",
                "incorrect_answers": [
                  "80 Mio",
                  "82 Mio",
                  "90 Mio"
                ],
                "answerIsRight": true
              },
              {
                "difficulty": "hard",
                "category": "Geo",
                "question": "Wie viele Bundesländer hat Deutschland?",
                "correct_answer": "16",
                "incorrect_answers": [
                  "15",
                  "14",
                  "13"
                ],
                "answerIsRight": true
              },
            ]
        },
      ],
    "player1": 
    {
      "email": "dracula@gmail.com",
      "password": "helloworld1"
    },
    "player2":
    {
      "email": "drompete@gmail.com",
      "password": "helloworld2"
    },
    "player1Points" : 5,
    "player2Points" : 25,
    "isFinished" : false
  }

  constructor(private http: HttpClient,
    private apiQuizService: ApiQuizService
  ) { }

  getQuizzes(): Observable<Quiz> {
    return of(this.data);
  }

  getQuizzesByEmail(player: Player): Observable<Quiz[]>{
    return this.apiQuizService.getOpenQuizzes(player)
  }

}
