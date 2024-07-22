import { Player } from './Player';
import { QuizRound } from './QuizRound';

export class Quiz{
    quizId: number;
    quizRound : QuizRound[] = [];
    player1: Player;
    player2: Player;
    player1Points: number;
    player2Points: number;

    

    constructor(quizId: number, quizRound: QuizRound[], player1: Player, player2: Player, player1Points: number, player2Points: number){
        this.quizId= quizId;
        this.quizRound = quizRound;
        this.player1 = player1;
        this.player2 = player2;
        this.player1Points = player1Points;
        this.player2Points = player2Points;
        
    }
}