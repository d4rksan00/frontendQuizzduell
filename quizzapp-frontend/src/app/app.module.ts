import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbar} from "@angular/material/toolbar";
import {HomepageComponent} from "./homepage/homepage.component";
import {GameOverviewComponent} from './game-overview/game-overview.component';
import {PageDoesNotExistComponent} from './page-does-not-exist/page-does-not-exist.component';
import {QuizRoundComponent} from "./quiz-round/quiz-round.component";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatStepperModule} from "@angular/material/stepper";
import { QuestionComponent } from './question/question.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    GameOverviewComponent,
    PageDoesNotExistComponent,
    QuizRoundComponent,
    QuestionComponent
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
    MatToolbarModule,
    MatToolbar,
    MatProgressBarModule,
    MatGridList,
    MatGridTile,
    MatStepperModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
