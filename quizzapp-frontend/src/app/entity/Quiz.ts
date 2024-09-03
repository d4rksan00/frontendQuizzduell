import { Player } from './Player';
import { QuizRound } from './QuizRound';

export class Quiz{
    quizId: number | undefined;
    quizRound : QuizRound[] = [];
    playerOne: Player;
    playerTwo: Player;
    playerOnePoints: number;
    playerTwoPoints: number;
    isFinished?: Boolean;

    constructor (quizRound: QuizRound[], playerOne: Player, playerTwo: Player, playerOnePoints: number, playerTwoPoints: number, isFinished: Boolean, quizId? : number){
        this.quizId= quizId;
        this.quizRound = quizRound;
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.playerOnePoints = playerOnePoints;
        this.playerTwoPoints = playerTwoPoints;
        this.isFinished = isFinished;
    }


}
