import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrl: './game-overview.component.css'
})
export class GameOverviewComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 1, color: 'lightblue'},
  ];

  winClick() {
    const element: HTMLElement | null = document.getElementById('button-1');
    if (element) {
      element.style.backgroundColor = 'green';
    }
  }
}
