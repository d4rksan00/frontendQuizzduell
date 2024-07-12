import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Quiz } from '../entity/Quiz';

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
              "questionId": 1,
              "question": "Wie viele Bundesländer hat Deutschland?",
              "answer": "16",
              "wrongAnswer1": "15",
              "wrongAnswer2": "17",
              "wrongAnswer3": "18",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": true
            },
            {
              "questionId": 2,
              "question": "Wie viele Einwohner hat Deutschland?",
              "answer": "82 Mio",
              "wrongAnswer1": "80 Mio",
              "wrongAnswer2": "85 Mio",
              "wrongAnswer3": "90 Mio",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": false
            },
            {
              "questionId": 3,
              "question": "Wie viele Bundesländer hat Deutschland?",
              "answer": "16",
              "wrongAnswer1": "15",
              "wrongAnswer2": "17",
              "wrongAnswer3": "18",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": false
            },
            {
              "questionId": 1,
              "question": "Wie viele Bundesländer hat Deutschland?",
              "answer": "16",
              "wrongAnswer1": "15",
              "wrongAnswer2": "17",
              "wrongAnswer3": "18",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": true
            },
            {
              "questionId": 2,
              "question": "Wie viele Einwohner hat Deutschland?",
              "answer": "82 Mio",
              "wrongAnswer1": "80 Mio",
              "wrongAnswer2": "85 Mio",
              "wrongAnswer3": "90 Mio",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": false
            },
            {
              "questionId": 3,
              "question": "Wie viele Bundesländer hat Deutschland?",
              "answer": "16",
              "wrongAnswer1": "15",
              "wrongAnswer2": "17",
              "wrongAnswer3": "18",
              "category": "Geo",
              "difficulty": "hard",
              "answerIsRight": false
            }
          ],
        },
        {
          "quizRoundId": 2,
          "question":
            [
              {
                "questionId": 4,
                "question": "Wie viele Bundesländer hat Deutschland?",
                "answer": "16",
                "wrongAnswer1": "15",
                "wrongAnswer2": "17",
                "wrongAnswer3": "18",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": false
              },
              {
                "questionId": 5,
                "question": "Wie viele Einwohner hat Deutschland?",
                "answer": "82 Mio",
                "wrongAnswer1": "80 Mio",
                "wrongAnswer2": "85 Mio",
                "wrongAnswer3": "90 Mio",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": false
              },
              {
                "questionId": 6,
                "question": "Wie viele Bundesländer hat Deutschland?",
                "answer": "16",
                "wrongAnswer1": "15",
                "wrongAnswer2": "17",
                "wrongAnswer3": "18",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": false
              },
              {
                "questionId": 4,
                "question": "Wie viele Bundesländer hat Deutschland?",
                "answer": "16",
                "wrongAnswer1": "15",
                "wrongAnswer2": "17",
                "wrongAnswer3": "18",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": false
              },
              {
                "questionId": 5,
                "question": "Wie viele Einwohner hat Deutschland?",
                "answer": "82 Mio",
                "wrongAnswer1": "80 Mio",
                "wrongAnswer2": "85 Mio",
                "wrongAnswer3": "90 Mio",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": true
              },
              {
                "questionId": 6,
                "question": "Wie viele Bundesländer hat Deutschland?",
                "answer": "16",
                "wrongAnswer1": "15",
                "wrongAnswer2": "17",
                "wrongAnswer3": "18",
                "category": "Geo",
                "difficulty": "hard",
                "answerIsRight": false
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
    "player2Points" : 25
  }

  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<Quiz> {
    return of(this.data);
  }
}
