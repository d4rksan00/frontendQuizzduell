import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Player} from '../entity/Player';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  activePlayer = new BehaviorSubject<Player>(new Player('', ''));
  currentActivePlayer = this.activePlayer.asObservable();

  constructor(private http: HttpClient) {
  }

  changeActivePlayer(player: Player) {
    this.activePlayer.next(player);
  }

  login(email: string, password: string): Observable<Player> {
    const concatedUsernamePassword = `${email}:${password}`
    const headers = new HttpHeaders().append('Authorization', `Basic ${window.btoa(concatedUsernamePassword)}`);
    this.http.get<Player>('http://localhost:8080/login', {headers: headers}).subscribe(player => this.activePlayer.next(player));
    return this.currentActivePlayer;
  }
}
