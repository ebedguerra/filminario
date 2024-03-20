import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Movie } from '../../services/movies.interface';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  
  @Input() movies!: Movie[];
  @Output() filteredMoviesChange = new EventEmitter<any[]>();
 
  searchQuery!: string;
  filteredMovies!: any[];
  controladorTiempo:any;
  storageMovies!: any[];


  ngOnInit() {
    this.storageMovies = JSON.parse(JSON.stringify(this.movies));
    this.filteredMovies = JSON.parse(JSON.stringify(this.movies));
  }

  onSearch() {
    if(this.searchQuery.length > 0){
      
      clearTimeout(this.controladorTiempo);
      this.controladorTiempo = setTimeout(()=>{
        
        const searchWords = this.searchQuery.toLowerCase().split(' ');

        this.filteredMovies = this.storageMovies.filter(movie => {
          const movieDetails = (movie.description + ' ' +  movie.title).toLowerCase();
          return searchWords.every(word => movieDetails.includes(word));
        });
        
        this.filteredMoviesChange.emit(this.filteredMovies);
      }, 500);
    }else{
      this.filteredMovies = JSON.parse(JSON.stringify(this.storageMovies));
    }
  }

  clearFilter(event:any){
    console.log(event.length)
    if(event.length === 0){
      console.log(event.length)
      this.filteredMovies = JSON.parse(JSON.stringify(this.storageMovies));
      console.log(this.filteredMovies);
      console.log(this.storageMovies)
      this.filteredMoviesChange.emit(this.filteredMovies);
    }
  }


}
