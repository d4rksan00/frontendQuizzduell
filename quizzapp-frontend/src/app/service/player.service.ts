import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../entity/Player';
import { ApiPlayerService } from './api-player.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private apiPlayerService: ApiPlayerService) { 

  }

  public createPlayer(email: String, password: String): Observable<Player> {
    return this.apiPlayerService.createPlayer(new Player(null, email, password, false, 0, 0, 0, 0,));
  }


}
