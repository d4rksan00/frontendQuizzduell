import { Question } from "./Question";


export class QuizRound {
    
    quizRoundId: number;
    question: Question[] = []
    

    constructor(quizRoundId: number, question: Question[]){
        this.quizRoundId = quizRoundId;
        this.question = question;

    }
}
