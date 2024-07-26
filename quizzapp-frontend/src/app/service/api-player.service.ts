import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../entity/Player';

@Injectable({
  providedIn: 'root'
})
export class ApiPlayerService {
 
  playerUrl: string = 'http://localhost:8181/player';

  constructor(private httpClient: HttpClient) { }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(`${this.playerUrl}/create`, player);
  }

  getPlayerByCredentials(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(`${this.playerUrl}/getByCredentials`, player);
  }

  getOpenGames(player:Player): Observable<Player> {
    return this.httpClient.post<Player>(`${this.playerUrl}/getOpenGames`, player);
  }


}
