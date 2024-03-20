import { Component, Input } from '@angular/core';
import { Movie } from '../../services/movies.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie!:Movie;

}
