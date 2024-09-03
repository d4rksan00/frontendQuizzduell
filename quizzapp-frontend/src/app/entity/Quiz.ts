import { Player } from './Player';
import { QuizRound } from './QuizRound';

export class Quiz{
    quizId: number;
    quizRounds : QuizRound[] = [];
    playerOne: Player;
    playerTwo: Player;
    playerOnePoints: number;
    playerTwoPoints: number;
    isFinished: Boolean;

    

    constructor(quizId: number, quizRounds: QuizRound[], playerOne: Player, playerTwo: Player, playerOnePoints: number, playerTwoPoints: number, isFinished: Boolean){
        this.quizId= quizId;
        this.quizRounds = quizRounds;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.playerOnePoints = playerOnePoints;
        this.playerTwoPoints = playerTwoPoints;
        this.isFinished = isFinished;
    }
}