import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindMoviesPage } from './pages/find-movies/find-movies.page';

const routes: Routes = [
  {
    path: '',
    component: FindMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }