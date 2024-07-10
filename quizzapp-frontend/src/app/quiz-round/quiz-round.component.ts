import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-quiz-round',
  templateUrl: './quiz-round.component.html',
  styleUrl: './quiz-round.component.css',
  imports: [MatProgressBarModule],
  standalone: true
})
export class ProgressBarDeterminateExample {}
