import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../entity/Player';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  activePlayer = new BehaviorSubject<Player>(new Player('', ''));
  currentActivePlayer = this.activePlayer.asObservable();

  constructor() { }

  changeActivePlayer(player: Player) {
    this.activePlayer.next(player);
  }
}
