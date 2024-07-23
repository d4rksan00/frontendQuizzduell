import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../entity/Player';

@Injectable({
  providedIn: 'root'
})
export class ApiPlayerService {
 

  constructor(private httpClient: HttpClient) { }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>('http://localhost:8181/player', player);
  }

  getPlayerByCredentials(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(`http://localhost:8181/player/getByCredentials`, player);
  }


}
