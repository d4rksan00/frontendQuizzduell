import { Player } from './Player';
import { QuizRound } from './QuizRound';

export class Quiz{
    quizId: number;
    quizRounds : QuizRound[] = [];
    playerOne: Player;
    playerTwo: Player;


    constructor(quizId: number, quizRound: QuizRound[], player1: Player, player2: Player){
        this.quizId= quizId;
        this.quizRounds = quizRound;
        this.playerOne = player1;
        this.playerTwo = player2;

    }


}
