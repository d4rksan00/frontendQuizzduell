import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {DataSharingService} from "../service/data-sharing.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {firstValueFrom} from "rxjs";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {

  showErrorMessage = false;

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
  constructor(private router: Router, private dataSharingService: DataSharingService) {
  }
  async cancelClicked() {
    try {
      const success = await this.router.navigate(['']);
      if (success) {
        console.log('Navigation successful');
      } else {
        console.log('Navigation failed');
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }
  async createAccClicked() {
    const email = this.playerForm.controls.email.value;
    const password = this.playerForm.controls.password.value;

    const registeredUser = await firstValueFrom(this.dataSharingService.register(email, password));

    if (registeredUser) {
      await this.router.navigate(['homepage', 'overview']);
    } else {
      this.showErrorMessage = true;
    }

  }
}
