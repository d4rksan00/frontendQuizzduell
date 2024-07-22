import {SignUpComponent} from './sign-up.component';
import {Router} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {RouterTestingModule} from "@angular/router/testing";

describe('SignUpComponent', () => {
  let spectator: Spectator<SignUpComponent>;
  const createComponent = createComponentFactory({
    component: SignUpComponent,
    imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, RouterTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    const router: Router = spectator.inject(Router);
    spyOn(router, 'navigate').and.stub();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });

  it('should navigate to login when cancelClicked is called', () => {

    const router = spectator.inject(Router);
    const navigateSpy = spyOn(router, 'navigate').and.resolveTo(true);

    spectator.component.cancelClicked();

    const expectedRoute = [''];

    expect(navigateSpy).toHaveBeenCalledWith(expectedRoute);
  });
});
