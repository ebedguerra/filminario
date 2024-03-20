export interface Movie{
    id: number,
    title: string,
    description: string,
    genre: string
  }
  export interface MoviesData {
    movies: Movie[],
    genres: string[]
  }