import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signInClicked() {
    console.log('Sign in clicked!');
  }

  signUpClicked() {
    console.log('Sign up clicked!');
  }


}
