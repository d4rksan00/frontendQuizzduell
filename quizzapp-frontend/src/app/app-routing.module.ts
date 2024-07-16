import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { PageDoesNotExistComponent } from './page-does-not-exist/page-does-not-exist.component';
import { QuizRoundComponent } from './quiz-round/quiz-round.component';
import {OpenGamesComponent} from "./open-games/open-games.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent,
    children: [
      {path: 'overview', component: GameOverviewComponent},
      {path: 'quizround', component: QuizRoundComponent},
      {path: 'opengames', component: OpenGamesComponent},
   ]
  },
  {path: '**', component: PageDoesNotExistComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
