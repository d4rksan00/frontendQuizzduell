import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DataSharingService} from '../service/data-sharing.service';
import {firstValueFrom} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

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
  constructor(private router: Router, private dataSharingService: DataSharingService) {}
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
