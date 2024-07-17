import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {Player} from '../entity/Player';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  activePlayer = new BehaviorSubject<Player>(new Player('', ''));
  currentActivePlayer = this.activePlayer.asObservable();

  //constructor(private http: HttpClient) {
  //}

  changeActivePlayer(player: Player) {
    this.activePlayer.next(player);
  }

  login(email: string, password: string): Observable<Player> {
    // const concatedUsernamePassword = `${username}:${password}`
    // const headers = new HttpHeaders().append('Authorization', `Basic ${window.btoa(concatedUsernamePassword)}`);
    // return this.http.get<Player>('http://localhost:8080/login', {headers: headers}).pipe(tap(player => this.activePlayer.next(player)));
    this.activePlayer.next(new Player(email, password));
    return this.currentActivePlayer;
  }
}
