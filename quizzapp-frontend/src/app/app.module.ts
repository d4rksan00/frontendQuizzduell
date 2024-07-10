import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {QuizRoundComponent} from "./quiz-round/quiz-round.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {QuizComponent} from "./quiz/quiz.component";
import {GameOverviewComponent} from "./game-overview/game-overview.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {PageDoesNotExistComponent} from "./page-does-not-exist/page-does-not-exist.component";
import {RegistryComponent} from "./registry/registry.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizRoundComponent,
    QuizComponent,
    GameOverviewComponent,
    HomepageComponent,
    PageDoesNotExistComponent,
    RegistryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
