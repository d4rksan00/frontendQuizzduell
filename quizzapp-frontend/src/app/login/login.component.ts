import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../service/data-sharing.service';
import { catchError, firstValueFrom, map } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PlayerService } from '../service/player.service';
import { ApiPlayerService } from '../service/api-player.service';
import { Player } from '../entity/Player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  showErrorMessage = false;
  player: Player = new Player('', '');

  playerForm = new FormGroup({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });
  constructor(
    private router: Router,
    private dataSharingService: DataSharingService,
    private apiPlayerService: ApiPlayerService
  ) { }
  async signUpClicked() {
    try {
      const success = await this.router.navigate(['signup']);
      if (success) {
        console.log('Navigation successful');
      } else {
        console.log('Navigation failed');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }


  submitClicked() {
    const email = this.playerForm.controls.email.value;
    const password = this.playerForm.controls.password.value;
    console.log(email)
    //todo: hier muss ein service aufgerufen werden, der den login durchführt

    this.apiPlayerService.getPlayerByCredentials(new Player(email, password)).subscribe((data) => {
      
      if (data === null) {
        this.showErrorMessage = true;
      } else {
        this.player.email = data.email;
        this.player.password = data.password;
        console.log("Email: " + this.player.email + " Password: " + this.player.password);
        this.router.navigate(['homepage', 'opengames']);
        this.dataSharingService.changeActivePlayer(new Player(email, password));
      }
    });
  }
}
