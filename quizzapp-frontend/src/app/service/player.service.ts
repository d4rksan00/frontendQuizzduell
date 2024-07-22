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


}
