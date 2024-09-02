import { Player } from './Player';
import { QuizRound } from './QuizRound';

export class Quiz{
    quizId: number;
    quizRounds : QuizRound[] = [];
    player1: Player;
    player2: Player;


    constructor(quizId: number, quizRound: QuizRound[], player1: Player, player2: Player){
        this.quizId= quizId;
        this.quizRounds = quizRound;
        this.player1 = player1;
        this.player2 = player2;

    }


}
