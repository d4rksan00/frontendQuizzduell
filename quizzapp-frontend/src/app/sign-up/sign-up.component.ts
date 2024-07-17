import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {Player} from "../entity/Player";
import {Router} from "@angular/router";
import {DataSharingService} from "../service/data-sharing.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  showErrorMessage = false;
  activePlayer = new Player('', '');

  constructor(private router: Router, private dataSharingService: DataSharingService) {

  }

  ngOnInit() {
    this.dataSharingService.activePlayer.subscribe((activePlayer) => this.activePlayer = activePlayer);
  }

  createAccClicked() {
    if(this.activePlayer.email === 'admin' && this.activePlayer.password === 'admin') {
      console.log('Login successful!');
      this.dataSharingService.changeActivePlayer(this.activePlayer);
      this.router.navigate(['/homepage/overview']);
    }else {
      console.log('Login failed!');
      this.showErrorMessage = true;
    }

  }
}
