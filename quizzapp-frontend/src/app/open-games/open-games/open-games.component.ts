import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

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
  paginatedGames: Game[] = [];
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 0;

  ngOnInit() {
    // Erstelle 100 Dummy-Spiele
    for (let i = 1; i <= 100; i++) {
      this.games.push({ name: `Game ${i}` });
    }
    this.updatePaginatedGames();
  }

  open(game: Game) {
    console.log('Opening', game.name);
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedGames();
  }

  updatePaginatedGames() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedGames = this.games.slice(startIndex, endIndex);
  }
}
