// src/app/services/movies-data.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { MoviesDataService } from './movies-data.service';
import { MoviesData } from './movies.interface';
import { Axios } from 'axios';
import { dataMovies } from './mocks/movies';


describe('MoviesDataService', () => {
  let service: MoviesDataService;
  const mockMovies: MoviesData =  dataMovies;
  let httpClientSpy:any;
  let mockMovieService;
  
  
  beforeEach(() => {
    mockMovieService = jasmine.createSpyObj('MoviesDataService', ['get']);
    TestBed.configureTestingModule({
      providers: [{ provide: Axios, useValue: mockMovieService }]
    });
    service = TestBed.inject(MoviesDataService);
    httpClientSpy=TestBed.inject(Axios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movies and genres', () => {

    httpClientSpy.get.and.returnValue(Promise.resolve(mockMovies));
    service.get().then((movies)=>{
      expect(movies).toEqual(mockMovies)
    });  
  

  });
});