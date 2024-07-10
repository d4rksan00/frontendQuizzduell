import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { GameOverviewComponent } from './game-overview/game-overview.component';
import { PageDoesNotExistComponent } from './page-does-not-exist/page-does-not-exist.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'homepage', component: HomepageComponent, 
    children: [
      {path: 'overview', component: GameOverviewComponent}
   ]
  },
  {path: '**', component: PageDoesNotExistComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
