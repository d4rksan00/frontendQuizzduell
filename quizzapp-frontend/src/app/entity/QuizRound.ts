import { Question } from "./Question";

export class QuizRound {

    quizRoundId: number;
    question: Question[] = []
    category: string

    constructor(quizRoundId: number, question: Question[], category: string) {
        this.quizRoundId = quizRoundId;
        this.question = question;
        this.category = category
    }
}
