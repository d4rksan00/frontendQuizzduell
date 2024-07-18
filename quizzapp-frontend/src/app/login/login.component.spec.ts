import {LoginComponent} from './login.component';
import {byPlaceholder, createComponentFactory, Spectator} from "@ngneat/spectator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {SpectatorElement} from "@ngneat/spectator";
import {RouterTestingModule} from "@angular/router/testing";

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterTestingModule],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should be empty at creation', () => {

    const password = spectator.component.playerForm.controls.password.value;
    const email = spectator.component.playerForm.controls.email.value;

    expect(password).toEqual('');
    expect(email).toEqual('');
  });

  it('should have user input', async () => {

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as SpectatorElement;
    spectator.typeInElement('a@b.c', emailInput);
    spectator.detectChanges();

    const email = spectator.component.playerForm.controls.email.value;
    expect(email).toEqual('a@b.c');

  });

  it('email should not be valid if wrong email is inserted', () =>{

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as SpectatorElement;
    spectator.typeInElement('thisIsNotaValidEmail', emailInput);
    spectator.detectChanges();

    const email = spectator.component.playerForm.controls.email;
    expect(email.valid).toBeFalse();

  });

  it('should disable the submit button if the form is invalid', () => {

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as HTMLInputElement;
    const passwordInput = spectator.query('admin') as HTMLInputElement;
    const submitButton = spectator.query('button[type="submit"]') as HTMLButtonElement;

    spectator.typeInElement('invalidEmail', emailInput);
    spectator.typeInElement('short', passwordInput);
    spectator.detectChanges();

    expect(spectator.component.playerForm.invalid).toBeTrue();

    expect(submitButton.disabled).toBeTrue();
  });

  it('should enable the submit button if the form is valid', () => {

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as HTMLInputElement;
    const passwordInput = spectator.query(byPlaceholder('password123')) as HTMLInputElement;
    const submitButton = spectator.query('button[type="submit"]') as HTMLButtonElement;

    spectator.typeInElement('valid.email@example.com', emailInput);
    spectator.typeInElement('Password123', passwordInput);
    spectator.detectChanges();

    expect(spectator.component.playerForm.valid).toBeTrue();

    expect(submitButton.disabled).toBeFalse();
  });

  it('should navigate to signup when signUpClicked is called', () => {

    const router: Router = spectator.inject(Router);
    const navigateSpy = spyOn(router, "navigate").and.resolveTo(true);

    spectator.component.signUpClicked();

    const expectedRoute = ['signup'];

    expect(navigateSpy).toHaveBeenCalledWith(expectedRoute);
  });

});
