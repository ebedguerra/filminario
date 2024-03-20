import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { FilterMoviesComponent } from './components/filter-movies/filter-movies.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SelectGenreComponent } from './components/select-genre/select-genre.component';
import { FindMoviesPage } from './pages/find-movies/find-movies.page';
import { MoviesRoutingModule } from './movies-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieComponent,
    FilterMoviesComponent,
    SearchMoviesComponent,
    SelectGenreComponent,
    FindMoviesPage
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgMultiSelectDropDownModule,
    FormsModule
  ]
})
export class MoviesModule { }
