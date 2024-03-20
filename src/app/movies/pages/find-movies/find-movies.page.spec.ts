import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMoviesPage } from './find-movies.page';

describe('FindMoviesPage', () => {
  let component: FindMoviesPage;
  let fixture: ComponentFixture<FindMoviesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindMoviesPage]
    });
    fixture = TestBed.createComponent(FindMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
