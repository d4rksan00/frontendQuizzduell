export class Question {
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string [];
  
    constructor(difficulty: string, category: string, question: string, correct_answer: string, incorrect_answers: string[]) {
      this.difficulty = difficulty;
      this.category = category;
      this.question = question;
      this.correct_answer = correct_answer;
      this.incorrect_answers = incorrect_answers
    }
  }