import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindMoviesPage } from '../../pages/find-movies/find-movies.page';
import { FilterMoviesComponent } from './filter-movies.component';
import { SelectGenreComponent } from '../select-genre/select-genre.component';
import { SearchMoviesComponent } from '../search-movies/search-movies.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';

describe('FilterMoviesComponent', () => {
  let component: FilterMoviesComponent;
  let componentParent: FindMoviesPage;
  let fixture: ComponentFixture<FilterMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[NgMultiSelectDropDownModule, FormsModule],
      declarations: [FilterMoviesComponent, SelectGenreComponent, SearchMoviesComponent, FindMoviesPage]
    });
    fixture = TestBed.createComponent(FilterMoviesComponent);
    component = fixture.componentInstance;
    //componentParent.dataExist = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
