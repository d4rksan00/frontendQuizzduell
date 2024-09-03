export class Question {
    id: number;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string [];
    incorrect_answer1: string;
    incorrect_answer2: string;
    incorrect_answer3: string;
    isPlayerOneCorrect: boolean;
    isPlayerTwoCorrect: boolean;
    answerIsRight: boolean;

    constructor(
      id: number, 
      category: string,
      incorrect_answer1: string, 
      incorrect_answer2: string, 
      incorrect_answer3: string,
      difficulty: string,
      question: string, 
      correct_answer: string,
      incorrect_answers: string[],
      answerIsRight: boolean,
      isPlayerOneCorrect: boolean,
      isPlayerTwoCorrect: boolean,
    ) 
      {
      this.id = id;
      this.incorrect_answer1 = incorrect_answer1;
      this.incorrect_answer2 = incorrect_answer2;
      this.incorrect_answer3 = incorrect_answer3;
      this.difficulty = difficulty;
      this.category = category;
      this.question = question;
      this.correct_answer = correct_answer;
      this.incorrect_answers = incorrect_answers
      this.answerIsRight = answerIsRight;
      this.isPlayerOneCorrect =isPlayerOneCorrect;
      this.isPlayerTwoCorrect = isPlayerTwoCorrect; 
    }
  }
