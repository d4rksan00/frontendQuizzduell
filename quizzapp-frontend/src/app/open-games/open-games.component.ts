import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Player } from '../entity/Player';
import { DataSharingService } from '../service/data-sharing.service';
import { ApiPlayerService } from '../service/api-player.service';
import { Quiz } from '../entity/Quiz';
import { ApiQuizService } from '../service/api-quiz.service';
import { Router } from '@angular/router';


interface Game {
  name: string;
}

@Component({
  selector: 'app-open-games',
  templateUrl: './open-games.component.html',
  styleUrls: ['./open-games.component.css']
})
export class OpenGamesComponent implements OnInit {
  games: Game[] = [];
  paginatedQuizzes: Quiz[] = [];
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 0;
  currentPlayer!: Player;
  //Todo: openGamesModel anfertigen
  openGames: Quiz[] = [];
  iSeeYouDontHaveFriends: Boolean = false;

  constructor(
    private dataSharingService: DataSharingService,
    private apiQuizService: ApiQuizService,
    private router: Router
  ){

  }


  ngOnInit() {
    // Erstelle 100 Dummy-Spiele
    //this.currentPlayer = this.dataSharingService.activePlayer.value;
    var userString = sessionStorage.getItem('user');
    this.currentPlayer = JSON.parse(userString!);
    console.log(this.currentPlayer);
    this.apiQuizService.getOpenQuizzes(this.currentPlayer).subscribe(
      (data) => {
        this.openGames = data;
        this.updatePaginatedQuizzes();
        if(this.openGames.length == 0)
          this.iSeeYouDontHaveFriends = true;
      }
  );


    // for (let i = 1; i <= 100; i++) {
    //   this.games.push({ name: `Game ${i}` });
    // }
    // this.updatePaginatedGames();

  }

  open(quiz: Quiz) {
    console.log('Opening: ', quiz.quizId);
    sessionStorage.setItem('gameToOpen', quiz.quizId.toString());
    this.router.navigate(['homepage', 'overview']);

  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedQuizzes();
  }

  updatePaginatedQuizzes() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedQuizzes = this.openGames.slice(startIndex, endIndex);
  }
}
