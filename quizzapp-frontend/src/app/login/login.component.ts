import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../entity/Player';
import { DataSharingService } from '../service/data-sharing.service';
import {firstValueFrom} from "rxjs";
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  showErrorMessage = false;

    playerForm = new FormGroup({
      email: new FormControl<string>('', {nonNullable: true, validators: Validators.email}),
      password: new FormControl<string>('', {nonNullable: true})
    });

  activePlayer = new Player('', '');

  constructor(private router: Router, private dataSharingService: DataSharingService) {

   }

   ngOnInit() {
    this.dataSharingService.activePlayer.subscribe((activePlayer) => this.activePlayer = activePlayer);
   }

  signUpClicked() {
    console.log('Sign up clicked!');
    this.router.navigate(['/signup']);
  }

  async submitClicked() {
    const email = this.playerForm.controls.email.value;
    const password = this.playerForm.controls.password.value;
    console.log(this.playerForm.controls.email.valid)
    const loginPlayer = await firstValueFrom(this.dataSharingService.login(email, password))
    if (loginPlayer) {
      await this.router.navigate(['homepage', 'overview']);
    } else {
      this.showErrorMessage = true
    }
  }
}
