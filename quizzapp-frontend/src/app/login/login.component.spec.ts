import {LoginComponent} from './login.component';
import {byPlaceholder, createComponentFactory, Spectator, SpectatorElement} from "@ngneat/spectator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;

  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule]
  })

  beforeEach(async () => {
    spectator = createComponent();
  })

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should be empty at creation', () => {

    const password = spectator.component.playerForm.controls.password.value;
    const email = spectator.component.playerForm.controls.email.value;

    expect(password).toEqual('');
    expect(email).toEqual('');
  })

  it('should have user input', async () => {

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as SpectatorElement;
    spectator.typeInElement('a@b.c', emailInput);
    spectator.detectChanges();

    const email = spectator.component.playerForm.controls.email.value;
    expect(email).toEqual('a@b.c');

  })

  it('email should not be valid if wrong email is inserted', () =>{

    const emailInput = spectator.query(byPlaceholder('Dr.med.Rasen@gmx.de')) as SpectatorElement;
    spectator.typeInElement('thisIsNotaValidEmail', emailInput);
    spectator.detectChanges();

    const email = spectator.component.playerForm.controls.email;
    expect(email.valid).toBeFalse();

  })

  //TODO: Form invalid = disabled & enabled, function navigate (has been called)

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



});
