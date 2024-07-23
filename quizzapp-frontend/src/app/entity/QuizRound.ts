import { Question } from "./Question";
import {CategoryEnum} from "./Category.enum";

export class QuizRound {

    quizRoundId: number;
    question: Question[] = []
    category: CategoryEnum

    constructor(quizRoundId: number, question: Question[], category: CategoryEnum) {
        this.quizRoundId = quizRoundId;
        this.question = question;
        this.category = category
    }
}
