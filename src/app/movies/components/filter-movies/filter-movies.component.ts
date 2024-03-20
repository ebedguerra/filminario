import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../../services/movies.interface';

@Component({
  selector: 'app-filter-movies',
  templateUrl: './filter-movies.component.html',
  styleUrls: ['./filter-movies.component.scss']
})
export class FilterMoviesComponent implements OnInit {
  @Input() genres!: string[];
  @Input() movies!: Movie[];
  @Output() filteredMoviesList = new EventEmitter<any[]>();
  filteredMovies!:Movie[];
  selectGenres!: any[];

  ngOnInit(): void {
    this.selectGenres = this.genres;
  }


  onFilteredMoviesChange(filteredMovies: Movie[]) {
    
    this.filteredMovies = filteredMovies;
    console.log(this.filteredMovies);
    this.onSendfilteredMoviesList();
  }
  onSelectGenresChange(selectGenres: any[]){
    
    this.selectGenres = selectGenres;
    console.log(this.selectGenres)
    this.onSendfilteredMoviesList();
  }

  onSendfilteredMoviesList():void{    
    
    if(this.filteredMovies && this.filteredMovies.length >0 ){

      const movies = this.filteredMovies.filter((movie)=>{      
        return this.selectGenres.some(genre => genre === movie.genre);  
      });
      this.filteredMoviesList.emit(movies);
    } else{
      this.filteredMoviesList.emit([]);
    }
  }
}
