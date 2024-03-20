import { Component, Input } from '@angular/core';
import { Movie } from '../../services/movies.interface';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent   {
  @Input() dataMovies!: Movie[];
}
