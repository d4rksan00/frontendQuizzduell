import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from '../entity/Quiz';
import {Category} from "../entity/Category";

@Component({
  selector: 'app-single-round',
  templateUrl: './single-round.component.html',
  styleUrl: './single-round.component.css'
})
export class SingleRoundComponent {

  @Input() quiz!: Quiz
  @Input() round!: number

  @Output() categoryChanged = new EventEmitter<string>();

  public categories: Category[] = [
    {id: 0, name: "SELECT_CATEGORY", shownName:"Select Category"},
    {id: 27, name: "ANIMALS", shownName:"Animals"},
    {id: 25, name: "ART", shownName:"Art"},
    {id: 26, name: "CELEBRITIES", shownName:"Celebrities"},
    {id: 16, name: "ENTERTAINMENT_BOARD_GAMES", shownName:"Entertainment: Board Games"},
    {id: 10, name: "ENTERTAINMENT_BOOKS", shownName:"Entertainment: Books"},
    {id: 29, name: "ENTERTAINMENT_COMICS", shownName:"Entertainment: Comics"},
    {id: 32, name: "ENTERTAINMENT_CARTOON_ANIMATIONS", shownName:"Entertainment: Animations"},
    {id: 11, name: "ENTERTAINMENT_FILM", shownName:"Entertainment: Film"},
    {id: 31, name: "ENTERTAINMENT_JAPANESE_ANIME_MANGA", shownName:"Entertainment: Japanese Anime & Manga"},
    {id: 12, name: "ENTERTAINMENT_MUSIC", shownName:"Entertainment: Music"},
    {id: 13, name: "ENTERTAINMENT_MUSICALS_THEATRES", shownName:"Entertainment: Musicals & Theatres"},
    {id: 14, name: "ENTERTAINMENT_TELEVISION", shownName:"Entertainment: Television"},
    {id: 15, name: "ENTERTAINMENT_VIDEO_GAMES", shownName:"Entertainment: Video Games"},
    {id: 9, name: "GENERAL_KNOWLEDGE", shownName:"General Knowledge"},
    {id: 22, name: "GEOGRAPHY", shownName:"Geography"},
    {id: 23, name: "HISTORY", shownName:"History"},
    {id: 20, name: "MYTHOLOGY", shownName:"Mythology"},
    {id: 24, name: "POLITICS", shownName:"Politics"},
    {id: 18, name: "SCIENCE_COMPUTERS", shownName:"Science Computers"},
    {id: 30, name: "SCIENCE_GADGETS", shownName:"Science Gadgets"},
    {id: 19, name: "SCIENCE_MATHEMATICS", shownName:"Science Mathematics"},
    {id: 17, name: "SCIENCE_NATURE", shownName:"Science Mathematics"},
    {id: 21, name: "SPORTS", shownName:"Sports"},
    {id: 28, name: "VEHICLES", shownName:"Vehicles"},
  ];
  public currentRoundCategory: any = this.quiz?.quizRounds[this.round].category

  getAnswerStatus(index: number): string {
    if (typeof this.quiz?.quizRounds[this.round] === 'undefined' || typeof this.quiz?.quizRounds[this.round].question[index] === 'undefined') {
      return '';
    }
    return this.quiz.quizRounds[this.round].question[index].answerIsRight ? 'correct' : 'incorrect';
  }

  submitCategory(categoryId: string)  {
    this.categoryChanged.emit(categoryId)
  }


}
