import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../entity/Player';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  showErrorMessage = false;
  activePlayer = new Player('', '');

  constructor(private router: Router, private dataSharingService: DataSharingService) {
    
   }

   ngOnInit() {
    this.dataSharingService.activePlayer.subscribe((activePlayer) => this.activePlayer = activePlayer);
   }

  signUpClicked() {
    console.log('Sign up clicked!');
  }
 
  loginClicked() {
    if(this.activePlayer.email === 'admin' && this.activePlayer.password === 'admin') {
      console.log('Login successful!');
      this.dataSharingService.changeActivePlayer(this.activePlayer);
      this.router.navigate(['/homepage']);
    }else {
      console.log('Login failed!');
      this.showErrorMessage = true;
    }
  }
}
