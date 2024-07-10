import { Component, input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showErrorMessage = false;
  inputUsername = '';
  inputPassword = '';

  constructor() {
    
   }

 
  signUpClicked() {
    console.log('Sign up clicked!');
  }
 
  loginClicked() {
    if(this.inputUsername === 'admin' && this.inputPassword === 'admin') {
      console.log('Login successful!');
      this.showErrorMessage = false;
    }else {
      console.log('Login failed!');
      this.showErrorMessage = true;
    }

  }


}
