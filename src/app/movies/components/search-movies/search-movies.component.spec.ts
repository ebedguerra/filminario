import { ComponentFixture, TestBed } from '@angular/core/testing';
import { dataMovies } from '../../services/mocks/movies';
import { SearchMoviesComponent } from './search-movies.component';
import { FormsModule } from '@angular/forms';

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [SearchMoviesComponent]
    });
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    component.movies = dataMovies.movies;
    component.searchQuery = 'two';
    fixture.detectChanges();
  });

  const onSearch= ()=>{
    const searchWords = component.searchQuery.toLowerCase().split(' ');

        component.filteredMovies = component.movies.filter(movie => {
          const movieDetails = (movie.description + ' ' +  movie.title).toLowerCase();
          return searchWords.every(word => movieDetails.includes(word));
        });
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enter a search and return a result', () =>{
    onSearch();    
    expect(component.filteredMovies.length).toEqual(2);
    fixture.detectChanges();
  });
});
