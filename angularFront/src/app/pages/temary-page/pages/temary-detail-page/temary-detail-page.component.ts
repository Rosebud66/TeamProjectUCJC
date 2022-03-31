import { Component, OnInit } from '@angular/core';
import { Exercise, ExerciseService } from 'src/app/exercise.service';

@Component({
  selector: 'app-temary-detail-page',
  templateUrl: './temary-detail-page.component.html',
  styleUrls: ['./temary-detail-page.component.scss']
})
export class TemaryDetailPageComponent implements OnInit {

  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
      this.exerciseService.getBooks().
      then(exercises => this.exercises = exercises);
  }
}
