import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';
import { MoviesData, Movie } from '../../services/movies.interface';

@Component({
  selector: 'app-find-movies',
  templateUrl: './find-movies.page.html',
  styleUrls: ['./find-movies.page.scss']
})
export class FindMoviesPage implements OnInit {
  moviesResult:MoviesData | Error = new(Error);
  dataExist = false;
  moviesList!: Movie[];
  genresList!: string[];

  constructor(
    private _moviesDataService: MoviesDataService,
  ){}
  
  ngOnInit():void{
    this._moviesDataService.get().then((data: MoviesData ) => {
      if(!(data instanceof Error)){
        this.generarData(data);
      }
      
      this.dataExist = true;
    }).catch(function (error: Error) {
      console.log(error);
    })
  }
  generarData(data:MoviesData):void {
      this.moviesList = data.movies;
      this.genresList = data.genres;
  }
  onFilteredMoviesList(moviesFiltered:any):void{
    console.log(moviesFiltered);
    this.moviesList = moviesFiltered;
  }
}
