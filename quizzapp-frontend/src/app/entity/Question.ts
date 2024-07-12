export class Question {

    
    constructor(
        public questionId: number,
        public question: string,
        public answer: string,
        public wrongAnswer1: string,
        public wrongAnswer2: string,
        public wrongAnswer3: string,
        public category: string,
        public difficulty: string,
        public answerIsRight: boolean,
    ) {

    }

    
}